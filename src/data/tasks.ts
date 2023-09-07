import { TaskListType } from '../types/TaskListType';

export const allTasks: TaskListType[] = [
  {
    date: new Date('September 7, 2023'),
    title: 'Time with owner',
    complete: false,
    tasks: [
      {
        id: 1,
        main: 'Take owner on a walk today',
        status: 'incomplete',
      },
      {
        id: 2,
        main: 'Eat serving-size of veggies',
        status: 'complete',
      },
    ],
  },
  {
    date: new Date('September 8, 2023'),
    title: 'Park Day',
    complete: false,
    tasks: [
      {
        id: 1,
        main: "Check out new fire hydrant beside neighbor's house",
        status: 'incomplete',
      },
      {
        id: 2,
        main: 'Make sure to bring frisbee to park',
        status: 'incomplete',
      },
      {
        id: 3,
        main: 'Date with Stella at park!!',
        status: 'incomplete',
      },
    ],
  },
];
