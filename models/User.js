// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");

// const User = sequelize.define("User", {
//   username: { type: DataTypes.STRING, unique: true, allowNull: false },
//   password: { type: DataTypes.STRING, allowNull: false },
// });

// module.exports = User;




// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");

// /*  Only id, username, password  */
// const User = sequelize.define(
//   "User",
//   {
//     id: {               // You can omit this; Sequelize adds it automatically,
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: false,  // 👈 DISABLE createdAt / updatedAt
//     tableName: "users", // 👈 Make sure it maps to the table you want
//   }
// );

// module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define(
  'User',
  {
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: false, tableName: 'users', underscored: true }
);

module.exports = User;
