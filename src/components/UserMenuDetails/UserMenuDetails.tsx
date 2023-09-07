import { KeyboardEvent } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { toggleMenu } from '../../features/menu/menuSlice';
import { UserMenuDetailsStyled } from './styles';
import { UserDataType } from '../../types/UserDataType';

const UserMenuDetails = ({
  details: { firstName, currentTag, img },
}: UserDataType) => {
  const { isOpen } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  // TODO: create util function for Enter key events
  const keyDownEvent = (e: KeyboardEvent<HTMLImageElement>): void => {
    if (e.key === 'Enter') dispatch(toggleMenu());
  };

  return (
    <UserMenuDetailsStyled $navOpen={isOpen ? '' : 'closed'}>
      <img
        role={isOpen ? 'img' : 'button'}
        tabIndex={isOpen ? -1 : 0}
        src={img}
        alt="placeholder"
        className="user-img"
        onClick={() => (isOpen ? null : dispatch(toggleMenu()))}
        onKeyDown={(e) => keyDownEvent(e)}
        aria-label={isOpen ? '' : 'open navigation'}
        title={isOpen ? '' : 'open navigation'}
      />
      <div className="user-text">
        <p className="user-name">{firstName}</p>
        <p className="custom-tag">{currentTag}</p>
      </div>

      <button
        type="button"
        className="toggle-btn"
        title="Collapse navigation"
        onClick={() => (isOpen ? dispatch(toggleMenu()) : null)}
        aria-label="collapse navigation"
      >
        <BsChevronLeft aria-hidden="true" />
      </button>
    </UserMenuDetailsStyled>
  );
};
export default UserMenuDetails;
