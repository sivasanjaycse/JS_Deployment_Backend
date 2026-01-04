const express = require("express");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/", taskRoutes);

// connect DB (safe for serverless)
connectDB();


module.exports = app;
