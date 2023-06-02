import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

import s from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <Navigation />
        </div>
      </header>
      <main className={s.main}>
        <div className={s.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
