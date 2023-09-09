import { formatDate } from '../utils/helpers';
import { TaskListType } from '../types/TaskListType';

export const allTasks: TaskListType[] = [
  {
    date: formatDate(new Date('September 8, 2023'), 'medium'),
    title: 'Time with owner',
    complete: false,
    tasks: [
      {
        id: 'id1',
        main: 'Take owner on a walk today',
        status: 'incomplete',
      },
      {
        id: 'id2',
        main: 'Eat serving-size of veggies',
        status: 'complete',
      },
    ],
  },
  {
    date: formatDate(new Date('September 9, 2023'), 'medium'),
    title: 'Park Day',
    complete: false,
    tasks: [
      {
        id: 'id1',
        main: "Check out new fire hydrant beside neighbor's house",
        status: 'incomplete',
      },
      {
        id: 'id2',
        main: 'Make sure to bring frisbee to park',
        status: 'incomplete',
      },
      {
        id: 'id3',
        main: 'Date with Stella at park!!',
        status: 'incomplete',
      },
    ],
  },
];
