import { Task } from "../models/Task";

export class TaskRepository {
  async findAll() {
    return Task.find();
  }

  async create(taskData: any) {
    const task = new Task(taskData);
    return task.save();
  }

  async deleteById(id: string) {
    return Task.findByIdAndDelete(id);
  }

  async toggleComplete(id: string) {
    const task = await Task.findById(id);
    if (!task) return null;
    task.completed = !task.completed;
    return task.save();
  }
}
