const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.ecommerce_db) {
  sequelize = new Sequelize(process.env.ecommerce_db);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;

// const sequelize = process.env.ecommerce_db
//   ? new Sequelize(process.env.ecommerce_db)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'postgres',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });