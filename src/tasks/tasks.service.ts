import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskStatus, Tasks } from '@prisma/client';
import { CreateTaskDTO } from './dto/createTask.dto';
import { FilteredTaskDTO } from './dto/getFilteredTask.dto';

@Injectable()
export class TasksService {
  constructor(private prismaService: PrismaService) {}

  async getTasks(filteredTasks: FilteredTaskDTO): Promise<Tasks[]> {
    const { status, search } = filteredTasks;
    const users = await this.prismaService.tasks.findMany();
    return users;
  }
  async createTask(createTask: CreateTaskDTO): Promise<Tasks> {
    const { title, desc } = createTask;
    const task = await this.prismaService.tasks.create({
      data: {
        title: title,
        description: desc,
        status: TaskStatus.OPEN,
      },
    });
    return task;
  }
  async getTaskById(id: string): Promise<Tasks> {
    const found = await this.prismaService.tasks.findUnique({
      where: {
        id: id,
      },
    });
    if (!found) {
      throw new NotFoundException(`task with id ${id} does not exist`);
    }
    return found;
  }
  async deleteTask(id: string) {
    try {
      await this.prismaService.tasks.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `you trying to delete ${id} which does not exist`,
        );
      }
      throw error;
    }
  }
  async updateStatus(id: string, status: TaskStatus) {
    try {
      const updateTask = await this.prismaService.tasks.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });
      return updateTask;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `Can't update id '${id}' which does not not exist`,
        );
      }
      throw error;
    }
  }

  // getFilteredTask(filteredDTO: FilteredTaskDTO): Tasks[] {
  //   const { status, search } = filteredDTO;
  //   let tasks = this.getTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) => task.title.includes(search) || task.desc.includes(search),
  //     );
  //   }
  //   return tasks;
  // }
}
