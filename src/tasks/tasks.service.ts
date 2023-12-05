import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/createTask.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(createTaskDto: CreateTaskDto) {
    const { title, desc } = createTaskDto;
    const task: Task = {
      id: uuidv4(),
      title: title,
      desc: desc,
      status: TaskStatus.IN_PROGRES,
    };
    this.tasks.push(task);
    return task;
  }
  getOneTasks(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    return found;
  }
}
