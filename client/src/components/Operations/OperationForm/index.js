import { useEffect, useState } from "react";
import Card from "../../Card";
import style from "./operationForm.module.scss";

const OperationForm = ({ onSaveOperation, operation = null, title }) => {
  const [enteredConcept, setEnteredConcept] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredType, setEnteredType] = useState(0);
  const [isFormReady, setIsFormReady] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (operation && operation.id) {
      setEnteredConcept(operation.concept);
      setEnteredAmount(operation.amount);
      setEnteredDate(operation.date);
      setEnteredType(operation.type_id);
      setIsFormReady(true);
      setIsEditing(true);
    }
  }, [operation]);

  useEffect(() => {
    if (enteredConcept && enteredAmount && enteredDate && enteredType) {
      setIsFormReady(true);
    } else {
      setIsFormReady(false);
    }
  }, [enteredConcept, enteredAmount, enteredDate, enteredType]);

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

    const savedOperation = {
      concept: enteredConcept,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      type_id: enteredType,
    };
    if (isEditing) {
      savedOperation.id = operation.id;
    }
    onSaveOperation(savedOperation);
    clearHandler();
  };

  return (
    <Card title={title}>
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
        <select value={enteredType} onChange={typeChangeHandler} disabled={isEditing}>
          <option value="0">Select an option</option>
          <option value="1">Income</option>
          <option value="2">Expense</option>
        </select>
        <div>
          {!isEditing && (
            <button
              type="button"
              className={style.clear}
              onClick={clearHandler}
            >
              Clear
            </button>
          )}
          <button type="submit" className={style.save} disabled={!isFormReady}>
            Save
          </button>
        </div>
      </form>
    </Card>
  );
};

export default OperationForm;
