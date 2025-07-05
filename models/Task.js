// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");
// const User = require("./User");

// const Task = sequelize.define("Task", {
//   title: { type: DataTypes.STRING, allowNull: false },
//   description: DataTypes.TEXT,
//   due_date: DataTypes.DATE,
//   is_completed: { type: DataTypes.BOOLEAN, defaultValue: false },
//   priority: { type: DataTypes.ENUM("Low", "Medium", "High"), defaultValue: "Medium" },
// });

// User.hasMany(Task, { foreignKey: "user_id", onDelete: "CASCADE" });
// Task.belongsTo(User, { foreignKey: "user_id" });

// module.exports = Task;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Task = sequelize.define(
  'Task',
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    due_date: DataTypes.DATEONLY,          // date only
    is_completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    priority: {
      type: DataTypes.ENUM('Low', 'Medium', 'High'),
      defaultValue: 'Medium',
    },
  },
  { timestamps: false, tableName: 'tasks', underscored: true }
);

User.hasMany(Task, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Task;
