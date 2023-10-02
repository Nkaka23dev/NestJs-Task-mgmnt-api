import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../taskStatus.enum';

export class TaskValidationPipe implements PipeTransform {
  readonly ALLOWEDSTATUS = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`${value} is not a valid status`);
    }
    console.log(value);
    return value;
  }

  private isValidStatus(value: any) {
    const idx = this.ALLOWEDSTATUS.indexOf(value);
    return idx !== -1;
  }
}
