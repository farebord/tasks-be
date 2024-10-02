import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

const taskService = new TaskService();

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getTasks();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const task = await taskService.createTask(req.body);
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  await taskService.deleteTask(req.params.id);
  res.status(204).send();
};

export const toggleTaskComplete = async (req: Request, res: Response) => {
  const task = await taskService.toggleTaskComplete(req.params.id);
  res.status(200).send(task);
};
