const sequelize = require("../database");
const Operation = require("../models/operation");

exports.getOperations = async (req, res, next) => {
  Operation.findAll({
    limit: parseInt(req.params.quantity),
    order: [["date", "DESC"]],
  })
    .then((operations) => {
      res.status(200).json({
        operations,
        message: "Fetched operations successfuly",
      });
    })
    .catch((err) => next(err));
};

exports.getAllOperations = async (req, res, next) => {
  Operation.findAll({ order: [["date", "DESC"]] })
    .then((operations) => {
      res.status(200).json({
        operations,
        message: "Fetched operations successfuly",
      });
    })
    .catch((err) => next(err));
};

exports.addOperation = async (req, res, next) => {
  const { concept, amount, date, type_id } = req.body;

  Operation.create({
    concept,
    amount,
    date,
    type_id,
  })
    .then((operation) => {
      res.status(201).json({
        operation,
        message: "Operation created successfuly",
      });
    })
    .catch((err) => next(err));
};

exports.updateOperation = (req, res, next) => {
  const { operationId } = req.params;
  const { concept, amount, date } = req.body;

  Operation.findByPk(operationId)
    .then((operation) => {
      if (!operation) {
        const error = new Error("Could not find operation");
        error.statusCode = 404;
        next(error);
      }
      operation.concept = concept;
      operation.amount = amount;
      operation.date = date;
      operation
        .save()
        .then(() => {
          res.status(200).json({
            message: "Operation updated successfuly",
            operation,
          });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

exports.deleteOperation = (req, res, next) => {
  const { id } = req.body;

  Operation.findByPk(id)
    .then((operation) => {
      operation.destroy();
      res.status(200).json({
        message: "Operation destroyed successfuly",
        operation,
      });
    })
    .catch((err) => next(err));
};

exports.getOperationsBalance = async (req, res, next) => {
  try {
    const incomes = await Operation.findAll({
      where: {
        type_id: 1
      },
      attributes: [
        [sequelize.fn("sum", sequelize.col("amount")), "total"],
      ],
      raw: true,
    });
    const expenses = await Operation.findAll({
      where: {
        type_id: 2
      },
      attributes: [
        [sequelize.fn("sum", sequelize.col("amount")), "total"],
      ],
      raw: true,
    });
    const balance = incomes[0].total - expenses[0].total;
      res.status(200).json({
        total: balance,
        message: "Fetched balance successfuly",
    });
  } catch (err) {
    next(err);
  };
};
