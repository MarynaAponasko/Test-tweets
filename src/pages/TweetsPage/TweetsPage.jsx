import { useEffect, useState } from "react";
import { fetchAllUsers, unpdateUserFollowers } from "../../services/api";
import { getVisibleUsers } from "../../helpers/getVisibleUsers";
import { getFilteredUsers } from "../../helpers/getFilteredUsers";
import {
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../../services/localStorage";
import UserList from "../../components/UsersList/UserList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Filter from "../../components/Filter/Filter";
import BackButton from "../../components/BackButton/BackButton";
import Loader from "../../components/Loader/Loader";
import TextInfo from "../../components/TextInfo/TextInfo";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [visibleUsersCount, setVisibleUsersCount] = useState(3);
  const [filter, setFilter] = useState(
    localStorage.getItem("selectedFilter") || "show all"
  );

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        const allUsers = await fetchAllUsers();
        setUsers(allUsers);
        setError(null);
      } catch (error) {
        setError(error.message);
        setUsers([]);
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
  }, []);
  const handleToggleFollowButton = async (userId, isFollowing) => {
    const updatedUsers = users.map(async (user) => {
      try {
        if (user.id === userId && !isFollowing) {
          const updateUserInfo = await unpdateUserFollowers(userId, {
            followers: user.followers + 1,
          });
          saveToLocalStorage(`user_${userId}`, true);
          return updateUserInfo;
        } else if (user.id === userId && isFollowing) {
          const updateUserInfo = await unpdateUserFollowers(userId, {
            followers: user.followers - 1,
          });
          removeFromLocalStorage(`user_${userId}`);
          return updateUserInfo;
        }
        setError(null);
        return user;
      } catch (error) {
        setError(error.message);
      }
    });

    const updatedUsersInfo = await Promise.all(updatedUsers);
    setUsers(updatedUsersInfo);
  };

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    setVisibleUsersCount(visibleUsersCount + 3);
    setIsLoadingMore(false);
  };
  const filteredUsers = getFilteredUsers(filter, users);

  const visibleUsers = getVisibleUsers(filteredUsers, visibleUsersCount);
  let visibleLoadMoreBtn =
    visibleUsers.length >= 3 && filteredUsers.length - visibleUsers.length > 0;

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <BackButton />
      <Filter filter={filter} setFilter={setFilter} />
      {visibleUsers.length === 0 && !isLoading && !error && <TextInfo />}
      {visibleUsers.length > 0 && !isLoading && !error && (
        <UserList
          users={visibleUsers}
          handleToggleFollowButton={handleToggleFollowButton}
        />
      )}
      {visibleLoadMoreBtn && (
        <LoadMoreButton
          handleLoadMore={handleLoadMore}
          disabled={isLoading}
          isLoadingMore={isLoadingMore}
        />
      )}
    </>
  );
};

export default TweetsPage;
