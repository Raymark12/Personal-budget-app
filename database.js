const Sequelize = require('sequelize');

const sequelize = new Sequelize('personal_budget', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
