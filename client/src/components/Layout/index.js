import { Toolbar } from "../Navigation/Toolbar";
import style from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar>Personal Budget</Toolbar>
      <div className={style.body} >{children}</div>
    </div>
  );
};

export default Layout;
