import style from "./card.module.scss";

export const Card = ({ children, title }) => {
  return (
    <div className={style.card}>
      {title && <div className={style.title}>{title}</div>}
      {children}
    </div>
  );
};
