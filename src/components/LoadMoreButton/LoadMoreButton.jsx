import PropTypes from "prop-types";
import s from "./loadMoreButton.module.css";
const LoadMoreButton = ({ handleLoadMore, disabled, isLoadingMore }) => {
  return (
    <button
      className={s.button}
      type="button"
      onClick={handleLoadMore}
      disabled={disabled}
    >
      {isLoadingMore ? "Loading..." : "Load more"}
    </button>
  );
};
export default LoadMoreButton;

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  isLoadingMore: PropTypes.bool.isRequired,
};
