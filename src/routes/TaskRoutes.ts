import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  toggleTaskComplete,
} from "../controllers/TaskController";

const router = Router();

// Get all tasks
router.get("/", getTasks);

// Create new task
router.post("/", createTask);

// Remove tasks by id
router.delete("/:id", deleteTask);

// Toggle task to complete
router.patch("/:id/toggle", toggleTaskComplete);

export default router;
