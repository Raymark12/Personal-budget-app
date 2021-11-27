import { useEffect, useState } from "react";
import {
  getLatestOperations,
  getOperationsBalance,
} from "../../services/operation";
import OperationsList from "../Operations/OperationsList";
import SectionTitle from "../SectionTitle";
import OperationsBalance from "./OperationsBalance";

const operationsQuantity = 10;

const Home = () => {
  const [balance, setBalance] = useState();
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    getLatestOperations(operationsQuantity)
      .then(({ data }) => {
        const latestOperations = data.operations.map((operation) => {
          return { ...operation, date: new Date(operation.date) };
        });
        setOperations(latestOperations);
      })
      .catch((error) => console.log(error));
    getOperationsBalance()
      .then(({ data }) => {
        setBalance(data.total);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <OperationsBalance balance={balance} />
      <SectionTitle>Latest {operationsQuantity} operations</SectionTitle>
      <OperationsList operations={operations} />
    </>
  );
};

export default Home;
