import { TaskRepository } from "../repositories/TaskRepository";

export class TaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async getTasks() {
    return this.taskRepository.findAll();
  }

  async createTask(taskData: { title: string; deadline?: Date }) {
    if (!taskData.title) {
      throw new Error("Task title is required");
    }

    return this.taskRepository.create({
      title: taskData.title,
      completed: false,
      deadline: taskData.deadline || null,
    });
  }

  async deleteTask(id: string) {
    const task = await this.taskRepository.deleteById(id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  }

  async toggleTaskComplete(id: string) {
    const task = await this.taskRepository.toggleComplete(id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  }
}
