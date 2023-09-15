import { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react';
import { BsFillPlusCircleFill, BsXLg, BsCheck2 } from 'react-icons/bs';
import { TaskType } from '../../../types/TaskListType';
import { ButtonGroupStyled, ButtonStyled } from '../../../components/Button';
import { TextInputStyled } from '../../../components/Input';
import { addTask } from '../tasksSlice';
import { useAppDispatch } from '../../../hooks/hooks';
import { MAX_TEXT_LENGTH } from '../../../utils/constants';
import { AddTaskStyled } from './styles';

type Props = {
  date: string;
};

const AddTask = ({ date }: Props) => {
  const [toggleAddTask, setToggleAddTask] = useState(false);
  const [timestamp, setTimeStamp] = useState(`${new Date().getTime()}`);
  const [task, setTask] = useState<TaskType>({
    id: '',
    main: ''.trim(),
    status: 'incomplete',
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeStamp(`${new Date().getTime()}`);
  }, [task.main]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [toggleAddTask]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (task.main && task.main.trim().length <= MAX_TEXT_LENGTH) {
      setToggleAddTask(false);
      dispatch(addTask({ date, task }));
      setTask((prev) => ({ ...prev, id: '', main: '' }));
    }
  };

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleAddTask(false);
    setTask((prev) => ({ ...prev, main: '' }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => ({
      ...prev,
      main: e.target.value,
      id: timestamp,
    }));
  };

  return (
    <>
      {toggleAddTask ? (
        <AddTaskStyled>
          <TextInputStyled
            type="text"
            name="new task"
            placeholder="Add new task"
            value={task.main}
            onChange={(e) => handleChange(e)}
            ref={inputRef}
          />
          <ButtonGroupStyled>
            <ButtonStyled
              title="Add this task"
              aria-label="add this task"
              $type="iconSmall"
              onClick={(e) => handleClick(e)}
            >
              <BsCheck2 aria-hidden="true" />
            </ButtonStyled>

            <ButtonStyled
              type="button"
              title="Cancel"
              aria-label="cancel"
              $type="iconSmall"
              onClick={(e) => handleClose(e)}
            >
              <BsXLg aria-hidden="true" />
            </ButtonStyled>
          </ButtonGroupStyled>
          <small className={task.main.length > MAX_TEXT_LENGTH ? 'red' : ''}>
            {MAX_TEXT_LENGTH - task.main.length}
          </small>
        </AddTaskStyled>
      ) : (
        <ButtonStyled
          title="Add a new task"
          type="button"
          onClick={() => setToggleAddTask(true)}
        >
          <BsFillPlusCircleFill />
          Add New Task
        </ButtonStyled>
      )}
    </>
  );
};
export default AddTask;
