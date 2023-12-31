import { Link } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { CardStyled } from './styles';

type CardTaskProps = {
  date: string;
  tasks: [string, string | undefined];
  current: boolean;
};

const Card = ({ date, tasks, current }: CardTaskProps) => {
  return (
    <CardStyled $current={current} className="card">
      <div className="card-main">
        <div className="tasks-details">
          <h3 className="tasks-heading">All tasks</h3>
          <p className="tasks-date">{date}</p>
        </div>

        <ul className="tasks-preview">
          <li className="task task-one">{tasks[0] || 'No tasks set.'}</li>
          {tasks[1] ? <li className="task task-two">{tasks[1]}</li> : ''}
          <li>Add more tasks...</li>
        </ul>
      </div>

      <Link to="my-tasks" title="View in tasks" aria-label="Go to tasks">
        <BsArrowRightCircleFill aria-hidden="true" />
      </Link>
    </CardStyled>
  );
};
export default Card;
