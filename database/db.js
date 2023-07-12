const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST, //direccion donde se encuentra la base de datos
  username: process.env.DB_USER, //usuario por defecto postgre
  password: process.env.DB_PASSWORD, //contraseña que se digita en postgre
  database: process.env.DB_NAME, //nombre de la base de datos
  port: process.env.DB_PORT,
  logging: false,
});

module.exports = { db };
