import { useState } from "react";
import OperationsList from "../Operations/OperationsList";
import OperationsBalance from "./OperationsBalance";

const Home = () => {
  const [balance, setBalance] = useState();
  const [operations, setOperations] = useState([]);

  return (
    <>
      <OperationsBalance balance={balance} />
      <OperationsList operations={operations} />
    </>
  );
};

export default Home;
