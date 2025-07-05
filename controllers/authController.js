// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// require("dotenv").config();

// exports.register = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const hashed = await bcrypt.hash(password, 10);
//     await User.create({ username, password: hashed });
//     res.status(201).json({ message: "User registered" });
//   } catch (e) {
//     res.status(400).json({ message: e.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ where: { username } });
//     if (!user) return res.status(400).json({ message: "Invalid." });
//     const ok = await bcrypt.compare(password, user.password);
//     if (!ok) return res.status(400).json({ message: "Invalid." });
//     const token = jwt.sign({ id: user.id, username }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.json({ token });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// };



// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// require("dotenv").config();

// /*  POST /api/auth/register  */
// exports.register = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const hashed = await bcrypt.hash(password, 10);
//     await User.create({ username, password: hashed });
//     res.status(201).json({ message: "User registered" });
//   } catch (e) {
//     res.status(400).json({ message: e.message });
//   }
// };

// /*  POST /api/auth/login  */
// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ where: { username } });
//     if (!user) return res.status(400).json({ message: "Invalid." });

//     const ok = await bcrypt.compare(password, user.password);
//     if (!ok) return res.status(400).json({ message: "Invalid." });

//     const token = jwt.sign(
//       { id: user.id, username: user.username },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.json({ token });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// };


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashed });
    res.status(201).json({ message: 'User registered' });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
