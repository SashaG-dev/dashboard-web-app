import { useState } from 'react';
import { BsThreeDotsVertical, BsXLg } from 'react-icons/bs';
import AddTask from '../AddTask/AddTask';
import { Task } from '../Task';
import { ButtonStyled } from '../../../components/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { TaskListType } from '../../../types/TaskListType';
import { completeTaskList } from '../../../store/slices/tasksSlice';
import { addTotalTasks } from '../../../store/slices/statsSlice';
import { useAppDispatch } from '../../../hooks/hooks';
import { TaskListCardStyled } from './styles';

type TaskCardPropsType = {
  data: TaskListType;
  index: number;
  date: string;
};

const TaskListCard = (props: TaskCardPropsType) => {
  const {
    index,
    date,
    data: { complete, tasks },
  } = props;
  const [editMode, setEditMode] = useState(false);

  const dispatch = useAppDispatch();

  const handleChange = () => {
    const tasksComplete = tasks.every((task) => task.status === 'complete');
    if (tasksComplete) {
      dispatch(completeTaskList({ date, boolean: true }));
      dispatch(addTotalTasks());
    }
  };

  return (
    <TaskListCardStyled
      aria-current={index === 0}
      $current={index === 0 ? 'current' : ''}
    >
      <div className="card-headings">
        <div>
          <h2>All tasks</h2>
          <p>{date}</p>
        </div>

        <ButtonStyled
          aria-label={editMode ? 'cancel' : 'edit this task list'}
          title={editMode ? 'Cancel' : 'Edit this task list'}
          onClick={() => setEditMode((prev) => !prev)}
          $type="icon"
          disabled={complete}
        >
          {editMode ? (
            <BsXLg aria-hidden="true" />
          ) : (
            <BsThreeDotsVertical aria-hidden="true" />
          )}
        </ButtonStyled>
      </div>

      <div className="list-wrapper">
        <ul>
          {tasks &&
            tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                date={date}
                editMode={editMode}
                complete={complete}
              />
            ))}
          {editMode || complete || <AddTask date={date} />}
        </ul>
      </div>

      {index === 0 && (
        <div className="status-container">
          <Checkbox
            id={date}
            title="Finish today's tasks"
            onChange={() => handleChange()}
            checked={complete}
            disabled={complete || editMode || !tasks || !tasks?.length}
          >
            Finish Today
          </Checkbox>
        </div>
      )}
    </TaskListCardStyled>
  );
};
export default TaskListCard;
