import { getFormatedDate } from "../../../utils/date";
import Card from "../../Card";
import style from "./operationsList.module.scss";

const types = [
  { id: 1, name: "income" },
  { id: 2, name: "expense" },
];

const OperationsList = ({ operations }) => {
  const getTypeName = (operationType) => {
    const type = types.find((type) => type.id == operationType);
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
              <div>{getTypeName(operation.type_id)}</div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default OperationsList;
