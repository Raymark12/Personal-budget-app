import { useState } from "react";
import OperationForm from "./OperationForm";

const Operations = () => {
  const [operations, setOperations] = useState([]);

  const addOperationHandler = (operation) => {
    setOperations((prevOperations) => [operation, ...prevOperations]);
  };

  const renderOperations = (
    <div>
      {operations.map((operation) => (
        <div>
          concept: {operation.concept}, amount: {operation.amount}, date:{" "}
          {operation.date.toString()}, type: {operation.type}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <OperationForm onSaveOperation={addOperationHandler} />
      {renderOperations}
    </div>
  );
};
export default Operations;
