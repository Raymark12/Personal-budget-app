import moment from "moment";
import { Link } from "react-router-dom";
import Card from "../../Card";
import style from "./operationsList.module.scss";

const types = [
  { id: 1, name: "income" },
  { id: 2, name: "expense" },
];

const OperationsList = ({ operations, onDeleteOperation }) => {
  const getTypeName = (operationType) => {
    const type = types.find((type) => type.id == operationType);
    return type.name;
  };
  
  return (
    <>
      {operations.map((operation) => (
        <Card key={operation.id}>
          <div className={style.operation}>
            <div className={style.header}>
              <div>{operation.concept}</div>
              <div>${operation.amount}</div>
            </div>
            <div>
              <div>{moment(operation.date).format("DD/MM/YYYY")}</div>
              <div>{getTypeName(operation.type_id)}</div>
            </div>
            <div className={style.actions}>
              <div>
                <Link to={`/operation/edit/${operation.id}`}>
                  <img src="/edit-24.png" />
                </Link>
                <img
                  src="/delete-trash-24.png"
                  onClick={() => onDeleteOperation(operation.id)}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default OperationsList;
