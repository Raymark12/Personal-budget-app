import { useEffect, useState } from "react";
import Card from "../../Card";
import style from "./operationForm.module.scss";

const OperationForm = ({ onSaveOperation }) => {
  const [enteredConcept, setEnteredConcept] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredType, setEnteredType] = useState(0);
  const [isFormReady, setIsFormReady] = useState(false);

  useEffect(() => {
    if (enteredConcept && enteredAmount && enteredDate && enteredType) {
      setIsFormReady(true);
    } else {
      setIsFormReady(false);
    }
  },
  [
    enteredConcept,
    enteredAmount,
    enteredDate,
    enteredType,
  ]);

  const conceptChangeHandler = (event) => {
    setEnteredConcept(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setEnteredType(+event.target.value);
  };

  const clearHandler = () => {
    setEnteredConcept("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredType(0);
    setIsFormReady(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const operation = {
      concept: enteredConcept,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      type_id: enteredType,
    };
    onSaveOperation(operation);
    clearHandler();
  };

  return (
    <Card title="Add Operation">
      <form onSubmit={submitHandler} className={style.operationForm}>
        <label>Concept</label>
        <input
          type="text"
          value={enteredConcept}
          onChange={conceptChangeHandler}
        />
        <label>Amount</label>
        <input
          type="text"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
        <label>Date</label>
        <input
          type="date"
          value={enteredDate}
          onChange={dateChangeHandler}
          min="2019-01-01"
          max="2022-12-31"
        />
        <label>Type</label>
        <select value={enteredType} onChange={typeChangeHandler}>
          <option value="0">Select an option</option>
          <option value="1">Income</option>
          <option value="2">Expense</option>
        </select>
        <div>
          <button type="button" className={style.clear} onClick={clearHandler}>
            Clear
          </button>
          <button type="submit" className={style.save} disabled={!isFormReady}>
            Save
          </button>
        </div>
      </form>
    </Card>
  );
};

export default OperationForm;
