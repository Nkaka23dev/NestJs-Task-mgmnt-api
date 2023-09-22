import { Injectable } from '@nestjs/common';
import { TaskStatus, Tasks } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDTO } from './dto/createTask.dto';

@Injectable()
export class TasksService {
  private AllTask: Tasks[] = [];

  getTasks(): Tasks[] {
    return this.AllTask;
  }

  getOneTask(id: string): Tasks {
    return this.AllTask.find((value) => value.id === id);
  }

  deleteTask(id: string): void {
    this.AllTask = this.AllTask.filter((value) => value.id !== id);
  }

  createTask(createTask: CreateTaskDTO) {
    const { title, desc } = createTask;
    const task: Tasks = {
      id: uuidv4(),
      title,
      desc,
      status: TaskStatus.OPEN,
    };
    this.AllTask.push(task);
    return task;
  }
}
