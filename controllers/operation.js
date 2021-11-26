const Operation = require("../models/operation");

exports.getOperations = async (req, res, next) => {
  Operation.findAll({ limit: parseInt(req.params.quantity) })
    .then((operations) => {
      res.status(200).json({
        operations,
        message: "Fetched operations successfuly",
      });
    })
    .catch((err) => next(err));
};

exports.addOperation = async (req, res, next) => {
  Operation.create({
    concept: req.body.concept,
    amount: req.body.amount,
    type_id: req.body.type_id,
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
  const { concept, amount } = req.body;

  Operation.findByPk(operationId)
    .then((operation) => {
      if (!operation) {
        const error = new Error("Could not find operation");
        error.statusCode = 404;
        next(error);
      }
      operation.concept = concept;
      operation.amount = amount;
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
