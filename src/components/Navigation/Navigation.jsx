import { NavLink } from "react-router-dom";
import s from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <li>
          <NavLink className={s.navigationItem} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={s.navigationItem} to="/tweets">
            Tweets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
