export interface Task {
  id: string;
  title: string;
  desc: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRES = 'IN_PROGRES',
  DONE = 'DONE',
}
