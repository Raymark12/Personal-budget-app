import style from "./sectionTitle.module.scss";

const SectionTitle = ({ children }) => {
  return (<div className={style.sectionTitle}>{children}</div>)
};

export default SectionTitle;