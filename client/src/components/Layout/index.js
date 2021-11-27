import { NavLink } from "react-router-dom";
import Toolbar from "../Navigation/Toolbar";
import style from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar>
        <div>Personal Budget</div>
        <nav>
          <ul>
            <li>
              <NavLink exact={true} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/operations">Operations</NavLink>
            </li>
          </ul>
        </nav>
      </Toolbar>
      <div className={style.body}>{children}</div>
    </div>
  );
};

export default Layout;
