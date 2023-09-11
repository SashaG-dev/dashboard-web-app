export type TaskType = {
  id: string;
  main: string;
  status: 'complete' | 'incomplete';
};

export type TaskListType = {
  date: string;
  title: string | `All tasks`;
  complete: boolean;
  tasks: TaskType[];
};
