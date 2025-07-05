// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const sequelize = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const taskRoutes = require("./routes/taskRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/tasks", taskRoutes);

// sequelize.sync().then(() => {
//   app.listen(process.env.PORT, () => console.log(`Backend on ${process.env.PORT}`));
// });

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize   = require('./config/db');
const authRoutes  = require('./routes/authRoutes');
const taskRoutes  = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',  authRoutes);
app.use('/api/tasks', taskRoutes);

/* sync & launch */
sequelize
  .sync({ alter: true })   // dev convenience
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log('Backend running on', process.env.PORT)
    )
  )
  .catch(err => console.error('DB fail →', err));
