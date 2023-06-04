import PropTypes from "prop-types";
import { RotatingLines } from "react-loader-spinner";
import s from "./loader.module.css";

const Loader = (isLoading) => {
  return (
    <div className={s.loader}>
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={isLoading}
      />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
