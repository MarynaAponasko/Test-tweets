import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";
import s from "./userList.module.css";

const UserList = ({ users, handleToggleFollowButton }) => {
  return (
    <ul className={s.userList}>
      {users.map(({ id, user, avatar, tweets, followers }) => {
        return (
          <UserItem
            id={id}
            key={id}
            user={user}
            avatar={avatar}
            tweets={tweets}
            followers={followers}
            handleToggleFollowButton={handleToggleFollowButton}
          />
        );
      })}
    </ul>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleToggleFollowButton: PropTypes.func.isRequired,
};
