type Task = {
  id: number;
  main: string;
  status: 'incomplete' | 'complete';
};

export type TaskListType = {
  date: Date;
  title: string | `All tasks`;
  complete: boolean;
  tasks: Task[];
};
