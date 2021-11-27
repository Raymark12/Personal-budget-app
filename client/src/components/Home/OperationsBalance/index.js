import Card from "../../Card";
import style from "./operationsBalance.module.scss";

const OperationsBalance = ({ balance }) => {
  return (
    <Card title="Balance">
      <div className={style.balance}>${balance}</div>
    </Card>
  );
};

export default OperationsBalance;
