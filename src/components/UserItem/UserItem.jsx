import PropTypes from "prop-types";
import { loadFromLocalStorage } from "../../services/localStorage";
import FollowButton from "../FollowButton/FollowButton";
import logo from "../../images/logo.png";
import s from "./userItem.module.css";

const UserItem = ({
  id,
  avatar,
  user,
  tweets,
  followers,
  handleToggleFollowButton,
}) => {
  const isFollowing = loadFromLocalStorage(`user_${id}`) === true;
  const onFollowButton = () => {
    handleToggleFollowButton(id, isFollowing);
  };

  const buttonText = isFollowing ? "Following" : "Follow";
  const className = isFollowing ? "followingBtn" : "followBtn";

  return (
    <li className={s.userItem} key={id}>
      <div className={s.topWrapper}>
        <img src={logo} alt="logo" width="76" height="22" />
        <div className={s.avatarWrapper}>
          <img
            src={avatar}
            alt={user}
            width="62"
            height="62"
            className={s.avatar}
          />
        </div>
      </div>
      <div className={s.userInfoWrapper}>
        <div className={s.textWrapper}>
          {" "}
          <p>{tweets || 100} tweets</p>
          <p>
            {followers.toLocaleString("en-US") ||
              Number("100500").toLocaleString("en-US")}{" "}
            followers
          </p>
        </div>
        <FollowButton
          text={buttonText}
          className={className}
          handleToggleFollowButton={onFollowButton}
        />
      </div>
    </li>
  );
};

export default UserItem;

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  handleToggleFollowButton: PropTypes.func.isRequired,
};
