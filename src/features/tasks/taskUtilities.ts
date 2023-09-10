import { getToday, formatDate } from '../../utils/helpers';
import { TaskListType } from '../../types/TaskListType';
import { DocumentData } from 'firebase/firestore';

export const getWeek = async (arr: DocumentData) => {
  const dayPassed = 1000 * 60 * 60 * 24;
  const today = getToday().getTime();
  const formattedToday = formatDate(getToday(), 'medium');
  const currentTaskList: TaskListType = {
    date: formattedToday,
    title: 'All tasks',
    complete: false,
    tasks: [],
  };

  let week: TaskListType[] = [currentTaskList];

  for (let i = 1; i < 7; i++) {
    const nextDay = new Date(today + dayPassed * i);
    const newTaskList: TaskListType = {
      date: formatDate(nextDay, 'medium'),
      title: 'All tasks',
      complete: false,
      tasks: [],
    };
    week[i] = newTaskList;
  }

  try {
    const userDates = Object.values(arr)
      .slice(0, 6)
      .map((task: TaskListType) => task.date);

    const userWeek = week.map((day) => {
      return userDates.includes(day.date)
        ? Object.values(arr).find(
            (task: TaskListType) => task.date === day.date
          )
        : day;
    });
    return userWeek;
  } catch (err) {
    console.error(err);
  }
};

export type WeekType = ReturnType<typeof getWeek>;
