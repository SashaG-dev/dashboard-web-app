import { useState, ChangeEvent } from 'react';
import {
  BsFillTrash3Fill,
  BsPencilFill,
  BsXLg,
  BsCheck2,
} from 'react-icons/bs';
import { useAppDispatch } from '../../hooks/hooks';
import { updateList, deleteTaskItem } from '../../store/slices/tasksSlice';
import Checkbox from '../../components/Checkbox/Checkbox';
import { ButtonGroupStyled } from '../../components/Button';
import { ButtonStyled } from '../../components/Button';
import { TextInputStyled } from '../../components/Input';
import { MAX_TEXT_LENGTH } from '../../utils/constants';
import { errorToast } from '../../utils/toasts';

type TaskPropType = {
  date: string;
  id: string;
  main: string;
  status: 'complete' | 'incomplete';
  editMode: boolean;
  complete: boolean;
};

export const Task = (props: TaskPropType) => {
  const { id, date, main, status, editMode, complete } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(main);

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleStatusChange = () => {
    dispatch(
      updateList({
        date,
        id,
        newStatus: status === 'incomplete' ? 'complete' : 'incomplete',
      })
    );
  };

  const handleUpdate = () => {
    if (task.trim() === '') {
      errorToast('Please enter valid text before saving.');
    } else if (task.length > MAX_TEXT_LENGTH) {
      errorToast('Task text length is too long.');
    } else {
      dispatch(updateList({ date, id, main: task.trim() }));
      setIsEditing(false);
    }
  };

  const titleStatus = status ? 'incomplete' : 'complete';

  const renderButtonGroup = () => {
    if (editMode) {
      if (isEditing) {
        return (
          <>
            <ButtonStyled
              $type="iconSmall"
              onClick={() => handleUpdate()}
              title="Save changes"
              aria-label="save changes"
            >
              <BsCheck2 aria-hidden="true" />
            </ButtonStyled>
            <ButtonStyled
              $type="iconSmall"
              onClick={() => setIsEditing(false)}
              title="Cancel"
              aria-label="cancel"
            >
              <BsXLg aria-hidden="true" />
            </ButtonStyled>
          </>
        );
      }
      return (
        <>
          <ButtonStyled
            $type="iconSmall"
            onClick={() => setIsEditing(true)}
            title="Edit this task"
            aria-label="edit this task"
          >
            <BsPencilFill aria-hidden="true" />
          </ButtonStyled>

          <ButtonStyled
            $type="iconSmall"
            onClick={() => dispatch(deleteTaskItem({ date, id }))}
            title="Delete this task"
            aria-label="Delete this task"
          >
            <BsFillTrash3Fill aria-hidden="true" />
          </ButtonStyled>
        </>
      );
    }
  };

  return (
    <li>
      {editMode ? (
        <span className="edit-span">
          {isEditing ? (
            <>
              <TextInputStyled
                type="text"
                name="edit task"
                value={task}
                onChange={(e) => handleChange(e)}
              />
              <small className={task.length > MAX_TEXT_LENGTH ? 'red' : ''}>
                {MAX_TEXT_LENGTH - task.length}
              </small>
            </>
          ) : (
            main
          )}
          <ButtonGroupStyled>{renderButtonGroup()}</ButtonGroupStyled>
        </span>
      ) : (
        <Checkbox
          id={id}
          checked={status === 'complete'}
          title={`Mark task as ${titleStatus}`}
          onChange={() => handleStatusChange()}
          ariaLabel={`mark task as ${titleStatus}`}
          disabled={complete}
        >
          {main}
        </Checkbox>
      )}
    </li>
  );
};
