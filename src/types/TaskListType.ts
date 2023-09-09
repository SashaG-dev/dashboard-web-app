export type Task = {
  id: string;
  main: string;
  status: 'incomplete' | 'complete';
};

export type TaskListType = {
  date: string;
  title: string | `All tasks`;
  complete: boolean;
  tasks: Task[];
};
