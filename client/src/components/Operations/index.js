import { useEffect, useState } from "react";
import OperationForm from "./OperationForm";
import OperationsList from "./OperationsList";
import OperationsFilters from "./OperationsFilters";
import SectionTitle from "../SectionTitle";

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
  };

  return (
    <>
      <OperationForm onSaveOperation={addOperationHandler} />
      <SectionTitle>All operations</SectionTitle>
      <OperationsFilters
        onShowExpenses={showExpenses}
        onShowIncomes={showIncomes}
        onClearFilter={clearFilter}
      />
      <OperationsList operations={filteredOperations} />
    </>
  );
};

export default Operations;
