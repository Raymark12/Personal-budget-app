const Operation = require('../models/operation');

exports.getOperations = async (req, res, next) => {
    const operations = await Operation.findAll({ limit: parseInt(req.params.quantity) });
    res.status(200).json({
        operations,
        message: 'Fetched operations successfuly',
    });
};

exports.addOperation = (req, res, next) => {
    res.send('Add Operation');
};

exports.updateOperation = (req, res, next) => {
    res.send('Update Operation');
};

exports.deleteOperation = (req, res, next) => {
    res.send('Delete Operation');
};