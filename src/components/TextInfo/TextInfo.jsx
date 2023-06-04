import s from "./textInfo.module.css";

const TextInfo = () => {
  return (
    <>
      <p className={s.textInfo}>Sorry! You have no users to show yet!</p>
      <p className={s.textInfo}>Please choose another filter option.</p>
    </>
  );
};
export default TextInfo;
