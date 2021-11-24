const Operation = require('../models/operation');

exports.getOperations = async (req, res, next) => {
    const operations = await Operation.findAll({ limit: parseInt(req.params.quantity) });
    res.status(200).json({
        operations,
        message: 'Fetched operations successfuly',
    });
};

exports.addOperation = async (req, res, next) => {
    const operation = await Operation.create({
        concept: req.body.concept,
        amount: req.body.amount,
        type_id: req.body.type_id,
    })
    res.status(201).json({
        operation,
        message: 'Operation created successfuly',
    });
};

exports.updateOperation = (req, res, next) => {
    const { operationId } = req.params;
    const { concept, amount } = req.body;

    Operation.findByPk(operationId)
        .then(operation => {
            operation.concept = concept;
            operation.amount = amount;
            operation.save();
            res.status(200).json({
                message: 'Operation updated successfuly',
                operation,
            })
        })
        .catch(err => console.log(err));
};

exports.deleteOperation = (req, res, next) => {
    res.send('Delete Operation');
};