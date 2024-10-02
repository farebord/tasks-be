import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import mongoose from "mongoose";
import TaskRoutes from "./routes/TaskRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// MongoDB Setup
mongoose
  .connect("mongodb://localhost:27017/todolist")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error while connecting to MongoDB", err));

// Routes
app.use("/api/tasks", TaskRoutes);

export default app;
