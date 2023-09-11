import { useState, ChangeEvent } from 'react';
import {
  BsFillTrash3Fill,
  BsPencilFill,
  BsXLg,
  BsCheck2,
} from 'react-icons/bs';
import { useAppDispatch } from '../../hooks/hooks';
import { updateList, deleteTaskItem } from './tasksSlice';
import Checkbox from '../../components/Checkbox/Checkbox';
import { ButtonGroupStyled } from '../../components/Button';
import { ButtonStyled } from '../../components/Button';
import { TextInputStyled } from '../../components/Input';
import { MAX_TEXT_LENGTH } from '../../utils/constants';

type TaskPropType = {
  date: string;
  id: string;
  main: string;
  status: 'complete' | 'incomplete';
  editMode: boolean;
};

export const Task = ({ date, id, main, status, editMode }: TaskPropType) => {
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
    if (task.trim() !== '' && task.length <= MAX_TEXT_LENGTH) {
      dispatch(updateList({ date, id, main: task.trim() }));
      setIsEditing(false);
    }
  };

  const titleStatus = status ? 'incomplete' : 'complete';

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

          <ButtonGroupStyled>
            {isEditing ? (
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
            ) : (
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
                  <BsFillTrash3Fill />
                </ButtonStyled>
              </>
            )}
          </ButtonGroupStyled>
        </span>
      ) : (
        <Checkbox
          id={id}
          checked={status === 'complete'}
          title={`Mark task as ${titleStatus}`}
          onChange={() => handleStatusChange()}
          ariaLabel={`mark task as ${titleStatus}`}
        >
          {main}
        </Checkbox>
      )}
    </li>
  );
};
