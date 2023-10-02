import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskStatus, Tasks } from '@prisma/client';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/createTask.dto';
import { TaskValidationPipe } from './pipe/task-validation.pipe';
import { FilteredTaskDTO } from './dto/getFilteredTask.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(
    @Query(ValidationPipe) filteredTasks: FilteredTaskDTO,
  ): Promise<Tasks[]> {
    return this.taskService.getTasks(filteredTasks);
  }
  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTask: CreateTaskDTO): Promise<Tasks> {
    return this.taskService.createTask(createTask);
  }
  @Get('/:id')
  getOneTask(@Param('id') id: string): Promise<Tasks> {
    return this.taskService.getTaskById(id);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status', TaskValidationPipe) status: TaskStatus,
  ): Promise<Tasks> {
    return this.taskService.updateStatus(id, status);
  }

  // @Get()
  // getTasks(@Query(ValidationPipe) filteredTasks: FilteredTaskDTO): Tasks[] {
  //   console.log(filteredTasks);
  //   if (Object.keys(filteredTasks).length) {
  //     return this.taskService.getFilteredTask(filteredTasks);
  //   } else {
  //     return this.taskService.getTasks();
  //   }
  // }
}
