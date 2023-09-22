export interface Tasks {
  id: string;
  title: string;
  desc: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'PROGRESS',
  DONE = 'DONE',
}
