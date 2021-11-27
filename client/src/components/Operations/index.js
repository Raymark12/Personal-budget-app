import { useEffect, useState } from "react";
import OperationForm from "./OperationForm";
import style from "./operations.module.scss";
import OperationsList from "./OperationsList";

const Operations = () => {
  const [operations, setOperations] = useState([]);
  const [selectedType, setSelectedType] = useState();
  const [filteredOperations, setFilteredOperations] = useState([]);

  useEffect(() => {
    let filtered;
    if (selectedType) {
      filtered = operations.filter(
        (operation) => operation.type == selectedType
      );
    } else {
      filtered = [...operations];
    }
    setFilteredOperations(filtered);
  }, [operations, selectedType]);

  const addOperationHandler = (operation) => {
    setOperations((prevOperations) => [operation, ...prevOperations]);
  };

  const showExpenses = () => {
    setSelectedType(2);
  };

  const showIncomes = () => {
    setSelectedType(1);
  };

  const clearFilter = () => {
    setSelectedType(null);
  }

  return (
    <div className={style.operations}>
      <OperationForm onSaveOperation={addOperationHandler} />
      <OperationsList
        operations={filteredOperations}
        onShowExpenses={showExpenses}
        onShowIncomes={showIncomes}
        onClearFilter={clearFilter}
      />
    </div>
  );
};

export default Operations;
