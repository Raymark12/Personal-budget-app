const express = require('express');

const operationController = require('../controllers/operation');

const router = express.Router();

router.get('/:quantity', operationController.getOperations);

router.post('/', operationController.addOperation);

router.patch('/:operationId', operationController.updateOperation);

router.delete('/', operationController.deleteOperation);

module.exports = router;