import { getFormatedDate } from "../../../utils/date";
import Card from "../../Card";
import style from "./operationsList.module.scss";

const types = [
  { code: 1, name: "income" },
  { code: 2, name: "expense" },
];

const OperationsList = ({ operations }) => {
  const getTypeName = (operationType) => {
    const type = types.find((type) => type.code == operationType);
    return type.name;
  };

  return (
    <>
      {operations.map((operation) => (
        <Card>
          <div className={style.operation}>
            <div className={style.header}>
              <div>{operation.concept}</div>
              <div>${operation.amount}</div>
            </div>
            <div>
              <div>{getFormatedDate(operation.date)}</div>
              <div>{getTypeName(operation.type)}</div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default OperationsList;
