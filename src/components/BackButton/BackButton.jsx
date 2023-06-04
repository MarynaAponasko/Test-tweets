import s from "./backButton.module.css";
import { useNavigate } from "react-router-dom";
import { FcPrevious } from "react-icons/fc";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className={s.button}
      type="button"
      onClick={() => {
        navigate("/");
      }}
    >
      <FcPrevious />
      back
    </button>
  );
};
export default BackButton;
