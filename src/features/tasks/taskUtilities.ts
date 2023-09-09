import { getToday, formatDate } from '../../utils/helpers';
import { allTasks } from '../../data/tasks';
import { TaskListType } from '../../types/TaskListType';

export const getWeek = () => {
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

  const userDates = allTasks.slice(0, 6).map((task) => task.date);

  const userWeek = week.map((day) => {
    return userDates.includes(day.date)
      ? allTasks.find((task) => task.date === day.date)
      : day;
  });

  return userWeek;
};

export type WeekType = ReturnType<typeof getWeek>;
