// const Task = require("../models/Task");

// exports.getAll = async (req, res) => {
//   const tasks = await Task.findAll({ where: { user_id: req.user.id } });
//   res.json(tasks);
// };

// exports.create = async (req, res) => {
//   const data = { ...req.body, user_id: req.user.id };
//   const task = await Task.create(data);
//   res.status(201).json(task);
// };

// exports.update = async (req, res) => {
//   const { id } = req.params;
//   await Task.update(req.body, { where: { id, user_id: req.user.id } });
//   res.json({ message: "Updated" });
// };

// exports.remove = async (req, res) => {
//   const { id } = req.params;
//   await Task.destroy({ where: { id, user_id: req.user.id } });
//   res.json({ message: "Deleted" });
// };


const Task = require('../models/Task');

exports.getAll = async (req, res) => {
  const tasks = await Task.findAll({
    where: { user_id: req.user.id },
    order: [['id', 'DESC']],
  });
  res.json(tasks);
};

exports.create = async (req, res) => {
  const task = await Task.create({ ...req.body, user_id: req.user.id });
  res.status(201).json(task);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  await Task.update(req.body, { where: { id, user_id: req.user.id } });
  res.json({ message: 'Updated' });
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id, user_id: req.user.id } });
  res.json({ message: 'Deleted' });
};
