export type TaskType = {
  id: string;
  main: string;
  status: 'complete' | 'incomplete';
};

export type TaskListType = {
  date: string;
  complete: boolean;
  tasks: TaskType[];
};
