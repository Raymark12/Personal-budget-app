import style from "./operationsFilters.module.scss";

const OperationsFilters = ({
  onShowExpenses,
  onShowIncomes,
  onClearFilter,
}) => {
  return (
    <>
      <div className={style.filter}>
        <button className={style.incomes} onClick={onShowIncomes}>
          Incomes
        </button>
        <button className={style.expenses} onClick={onShowExpenses}>
          Expenses
        </button>
      </div>
      <a className={style.clearFilter} onClick={onClearFilter}>
        Clear filter
      </a>
    </>
  );
};

export default OperationsFilters;
