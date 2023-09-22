import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.model';
import { CreateTaskDTO } from './dto/createTask.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTask(): Tasks[] {
    return this.taskService.getTasks();
  }
  @Get('/:id')
  getOneTask(@Param('id') id: string): Tasks {
    return this.taskService.getOneTask(id);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(id);
  }

  @Post()
  createTask(@Body() createTask: CreateTaskDTO) {
    return this.taskService.createTask(createTask);
  }
}
