import OperationsBalance from "./OperationsBalance";

const Home = () => {
  const balance = "$5000";
  return (
    <OperationsBalance balance={balance}/>
  );
};

export default Home;