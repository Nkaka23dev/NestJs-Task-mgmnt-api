import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../taskStatus.enum';

export class FilteredTaskDTO {
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}