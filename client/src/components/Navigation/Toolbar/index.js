import style from "./toolbar.module.scss";

const Toolbar = ({ children }) => {
  return <div className={style.toolbar}>{children}</div>;
};

export default Toolbar;
