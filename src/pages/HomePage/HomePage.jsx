import { useNavigate } from "react-router-dom";
import s from "./homePage.module.css";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://media.giphy.com/media/5h9qo1O6evgKBgW9l5/giphy.gif"
        alt="Hello"
        width="300px"
        className={s.welcomeImg}
      />
      <p className={s.invitationText}>Welcome!</p>
      <p className={s.invitationText}>
        Do you like reading tweets or want to follow new exciting people?
      </p>
      <p className={s.invitationText}>You chose the right place!</p>

      <button
        type="button"
        className={s.button}
        onClick={() => {
          navigate("/tweets");
        }}
      >
        Try it now!
      </button>
    </>
  );
};

export default HomePage;
