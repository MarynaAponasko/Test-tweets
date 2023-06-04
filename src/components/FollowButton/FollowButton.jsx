import s from "./followButton.module.css";
const FollowButton = ({ text, className, handleToggleFollowButton }) => {
  return (
    <>
      {className === "followBtn" ? (
        <button
          type="button"
          onClick={handleToggleFollowButton}
          className={s.followBtn}
        >
          {text}
        </button>
      ) : (
        <button
          type="button"
          onClick={handleToggleFollowButton}
          className={s.followingBtn}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default FollowButton;
