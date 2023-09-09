import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import AddTask from '../AddTask';
import { ButtonStyled } from '../../../components/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';
import { TaskListType } from '../../../types/TaskListType';
import { TaskListCardStyled } from './styles';

type TaskCardPropsType = {
  data: TaskListType;
  index: number;
  date: string;
};

const TaskListCard = (props: TaskCardPropsType) => {
  const [editMode, setEditMode] = useState(false);

  const renderTasks = () => {
    return props.data?.tasks.map((task) => {
      return (
        <li key={task.id}>
          <Checkbox>{task.main}</Checkbox>
        </li>
      );
    });
  };

  return (
    <TaskListCardStyled
      aria-current={props.index === 0}
      $current={props.index === 0 ? 'current' : ''}
    >
      <div className="card-headings">
        <form>
          <div>
            <h2>{props.data?.title || 'All Tasks'}</h2>
            <p>{props?.date || props.data?.date}</p>
          </div>
        </form>

        <ButtonStyled
          aria-label="edit this task list"
          title="Edit this task list"
          $type="icon"
        >
          <BsThreeDotsVertical aria-hidden="true" />
        </ButtonStyled>
      </div>

      <div className="list-wrapper">
        <ul>
          {props.data?.tasks && renderTasks()}
          <AddTask date={props.date} />
        </ul>
      </div>

      {props.index === 0 ? (
        <div className="status-container">
          <Checkbox
            id={props.date}
            title="Finish today's tasks"
            ariaLabel="finish today;s tasks"
          >
            Finish Today
          </Checkbox>
        </div>
      ) : (
        ''
      )}
    </TaskListCardStyled>
  );
};
export default TaskListCard;
