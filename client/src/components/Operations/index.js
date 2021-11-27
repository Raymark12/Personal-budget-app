import { useEffect, useState } from "react";
import OperationForm from "./OperationForm";
import OperationsList from "./OperationsList";
import OperationsFilters from "./OperationsFilters";
import SectionTitle from "../SectionTitle";
import {
  addNewOperation,
  getAllOperations,
  deleteOperation,
} from "../../services/operation";

const Operations = () => {
  const [operations, setOperations] = useState([]);
  const [selectedType, setSelectedType] = useState();
  const [filteredOperations, setFilteredOperations] = useState([]);

  useEffect(() => {
    getAllOperations()
      .then(({ data }) => {
        setOperations(data.operations);
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
      .then(({ data }) => {
        setOperations((prevOperations) => [data.operation, ...prevOperations]);
      })
      .catch((error) => console.log(error));
  };

  const deleteOperationHandler = (id) => {
    deleteOperation(id)
      .then(() => {
        setOperations((prevOperations) => {
          const deletedIndex = prevOperations.findIndex((operation) => operation.id == id);
          const newOperations = [ ...prevOperations ];
          newOperations.splice(deletedIndex, 1);
          setOperations(newOperations);
        });
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
      <OperationForm
        onSaveOperation={addOperationHandler}
        title="Add Operation"
      />
      <SectionTitle>All operations</SectionTitle>
      <OperationsFilters
        onShowExpenses={showExpenses}
        onShowIncomes={showIncomes}
        onClearFilter={clearFilter}
      />
      <OperationsList
        operations={filteredOperations}
        onDeleteOperation={deleteOperationHandler}
      />
    </>
  );
};

export default Operations;
