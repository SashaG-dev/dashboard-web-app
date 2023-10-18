import { UserType } from '../types/UserType';
import { SavedFocusType } from '../types/SavedFocusType';
import { NoteType } from '../types/NoteType';
import { UserStatsType } from '../types/UserStatsType';
import { TaskListType } from '../types/TaskListType';

type DemoType = {
  details: UserType;
  focus: SavedFocusType[];
  notes: NoteType[];
  statistics: UserStatsType;
  tasks: TaskListType[];
};

export const demoData: DemoType = {
  details: {
    id: process.env.DEMO_ID!,
    email: process.env.DEMO_EMAIL!,
    password: process.env.DEMO_PASSWORD!,
    displayName: 'demo.user',
    name: 'Taskmaster',
    photoURL: 'avatar5',
    color: 'purple',
    darkMode: true,
  },
  focus: [
    {
      id: '1',
      name: 'Reading',
      hours: '0',
      minutes: '45',
      seconds: '00',
    },
    {
      id: '2',
      name: 'Study',
      hours: '1',
      minutes: '00',
      seconds: '00',
    },
    {
      id: '3',
      name: 'Untitled Session',
      hours: '0',
      minutes: '10',
      seconds: '00',
    },
  ],
  notes: [
    {
      id: '1',
      date: 'Sep 30, 2023',
      heading: 'Weekly Summary',
      main: 'This was a good week! Been learning more and more about Node.js and excited to use it for a future project.',
    },
    {
      id: '2',
      date: 'Oct 7, 2023',
      heading: 'Weekly Summary',
      main: 'I went to the beach this week! Biggest highlight of the week, and I got to spend time with family and friends as well.',
    },
    {
      id: '3',
      date: 'Oct 14, 2023',
      heading: 'Weekly Summary',
      main: 'This was a slow week, but a good one! Next week I have plans to visit some family out of state, but first I am making it a goal to finish my current project before leaving.',
    },
  ],
  statistics: {
    totalFocusTime: 72020,
    totalNotesTaken: 3,
    totalTaskItems: 24,
    totalTasksComplete: 10,
  },
  tasks: [],
};
