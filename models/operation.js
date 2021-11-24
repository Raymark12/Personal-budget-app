const Sequelize = require('sequelize');

const sequelize = require('../database');

const Operation = sequelize.define('operation', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  concept: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  amount: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  type_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Operation;
