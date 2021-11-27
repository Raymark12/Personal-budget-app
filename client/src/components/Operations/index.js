import { useEffect, useState } from "react";
import OperationForm from "./OperationForm";
import OperationsList from "./OperationsList";
import OperationsFilters from "./OperationsFilters";
import SectionTitle from "../SectionTitle";
import { addNewOperation, getAllOperations } from "../../services/operation";

const Operations = () => {
  const [operations, setOperations] = useState([]);
  const [selectedType, setSelectedType] = useState();
  const [filteredOperations, setFilteredOperations] = useState([]);

  useEffect(() => {
    getAllOperations()
      .then(({ data }) => {
        const allOperations = data.operations.map((operation) => {
          return { ...operation, date: new Date(operation.date) };
        });
        setOperations(allOperations);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let filtered;
    if (selectedType) {
      filtered = operations.filter(
        (operation) => operation.type_id == selectedType
      );
    } else {
      filtered = [...operations];
    }
    setFilteredOperations(filtered);
  }, [operations, selectedType]);

  const addOperationHandler = (operation) => {
    addNewOperation(operation)
      .then(() => {
        setOperations((prevOperations) => [operation, ...prevOperations]);
      })
      .catch((error) => console.log(error));
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
