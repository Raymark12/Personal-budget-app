import { useState } from "react";
import OperationForm from "./OperationForm";
import style from "./operations.module.scss";
import OperationsList from "./OperationsList";

const Operations = () => {
  const [operations, setOperations] = useState([]);

  const addOperationHandler = (operation) => {
    setOperations((prevOperations) => [operation, ...prevOperations]);
  };

  return (
    <div className={style.operations}>
      <OperationForm onSaveOperation={addOperationHandler} />
      <OperationsList operations={operations} />
    </div>
  );
};

export default Operations;
