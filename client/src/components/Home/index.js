import { useState } from "react";
import OperationsList from "../Operations/OperationsList";
import SectionTitle from "../SectionTitle";
import OperationsBalance from "./OperationsBalance";

const Home = () => {
  const [balance, setBalance] = useState();
  const [operations, setOperations] = useState([]);

  return (
    <>
      <OperationsBalance balance={balance} />
      <SectionTitle>Last 10 operations</SectionTitle>
      <OperationsList operations={operations} />
    </>
  );
};

export default Home;
