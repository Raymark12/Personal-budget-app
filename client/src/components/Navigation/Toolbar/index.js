import style from "./toolbar.module.scss";

export const Toolbar = ({ children }) => {
  return <div className={style.toolbar}>{children}</div>;
};
