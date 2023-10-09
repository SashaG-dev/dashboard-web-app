import { KeyboardEvent } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { toggleMenu } from '../../../store/slices/menuSlice';
import { UserMenuDetailsStyled } from './styles';
import img from '../../../assets/placeholder-img.jpg';

const UserMenuDetails = () => {
  const { displayName, name } = useAppSelector((state) => state.user.userData);
  const { isOpen } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  const keyDownEvent = (e: KeyboardEvent<HTMLImageElement>): void => {
    if (e.key === 'Enter') dispatch(toggleMenu({}));
  };

  return (
    <UserMenuDetailsStyled $navOpen={isOpen ? '' : 'closed'}>
      <img
        role={isOpen ? 'img' : 'button'}
        tabIndex={isOpen ? -1 : 0}
        src={img}
        alt="placeholder"
        className="user-img"
        onClick={() => (isOpen ? null : dispatch(toggleMenu({})))}
        onKeyDown={(e) => keyDownEvent(e)}
        aria-label={isOpen ? '' : 'open navigation'}
        title={isOpen ? '' : 'open navigation'}
      />
      <div className="user-text">
        <p className="custom-tag">{name || 'User'}</p>
        <p className="user-name">{displayName}</p>
      </div>

      <button
        type="button"
        className="toggle-btn"
        title="Collapse navigation"
        onClick={() => (isOpen ? dispatch(toggleMenu({})) : null)}
        aria-label="collapse navigation"
      >
        <BsChevronLeft aria-hidden="true" />
      </button>
    </UserMenuDetailsStyled>
  );
};
export default UserMenuDetails;
