// import { PipeTransform } from '@nestjs/common';

// export class TransformIdPipe implements PipeTransform {
//   transform(value: any) {
//     const newDta = value.split('-');
//     console.log(newDta);
//     return newDta;
//   }
// }
import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from 'src/tasks/taskStatus.enum';

export class TransFormId implements PipeTransform {
  readonly ALLOWEDSTATUS = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];
  transform(value: any) {
    value = value.status.toUpperCase();
    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`${value} is not a valid status`);
    }
    return value;
  }
  private isValidStatus(value: any) {
    const idx = this.ALLOWEDSTATUS.indexOf(value);
    return idx !== -1;
  }
}
