const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, 'root', 'QpSKLA5%SQL', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;
