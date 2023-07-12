const { DataTypes } = require('sequelize');

const { db } = require('../database/db');

const Transfer = db.define('transfers', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 1000,
  },
  senderUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiverUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiverUserName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  receiverUserAccount: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Transfer;
