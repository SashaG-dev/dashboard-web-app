import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { BsCheck2, BsPencilFill } from 'react-icons/bs';
import Modal from '../../../components/Modal/Modal';
import { ButtonStyled } from '../../../components/Button';
import { TextInputStyled } from '../../../components/Input';
import { MAX_TITLE_LENGTH } from '../../../utils/constants.ts';
import { SaveDetailsStyled } from './styles.ts';

type Props = {
  close: () => void;
  onClick: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  focus: { name: string; hours: string; minutes: string; seconds: string };
};

const SaveFocusModal = (props: Props) => {
  const { focus, close, onClick, onChange } = props;
  const [editMode, setEditMode] = useState<boolean>(false);
  const btnRef = useRef<null | HTMLButtonElement>(null);

  useEffect(() => {
    if (btnRef.current) btnRef.current.focus();
  }, []);

  return (
    <Modal
      role="dialog"
      heading="Do you want to save this session for later?"
      btnText="Save and Start"
      onClick={onClick}
      close={close}
    >
      <SaveDetailsStyled>
        {editMode ? (
          <div className="edit-save">
            <TextInputStyled
              onChange={(e) => onChange(e)}
              value={focus.name}
              name="name"
            />

            <small
              className={focus.name.length > MAX_TITLE_LENGTH ? 'red' : ''}
            >
              {MAX_TITLE_LENGTH - focus.name.length}
            </small>

            <ButtonStyled
              title="Finish editing"
              aria-label="finish editing timer name"
              onClick={() => setEditMode(false)}
            >
              <BsCheck2 aria-hidden="true" />
            </ButtonStyled>
          </div>
        ) : (
          <div className="edit-save">
            <h3>{focus.name}</h3>

            <ButtonStyled
              title="Edit name"
              aria-label="edit timer name"
              onClick={() => setEditMode(true)}
              ref={btnRef}
            >
              <BsPencilFill aria-hidden="true" />
            </ButtonStyled>
          </div>
        )}

        <div className="time-details">
          <p>
            {focus.hours !== '0' ? `${focus.hours}:` : ''}
            {`${focus.minutes}`.padStart(2, '0')}:
            {`${focus.seconds}`.padStart(2, '0')}
          </p>
        </div>
      </SaveDetailsStyled>
    </Modal>
  );
};
export default SaveFocusModal;
