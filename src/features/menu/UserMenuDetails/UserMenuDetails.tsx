import { KeyboardEvent } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { toggleMenu } from '../../../store/slices/menuSlice';
import { UserMenuDetailsStyled } from './styles';
import placeholder from '../../../assets/placeholder.jpg';
import avatar1 from '../../../../public/avatars/avatar1.jpg';
import avatar2 from '../../../../public/avatars/avatar2.jpg';
import avatar3 from '../../../../public/avatars/avatar3.jpg';
import avatar4 from '../../../../public/avatars/avatar4.jpg';
import avatar5 from '../../../../public/avatars/avatar5.jpg';

const UserMenuDetails = () => {
  const { displayName, name, photoURL } = useAppSelector(
    (state) => state.user.userData
  );

  const { isOpen } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  const keyDownEvent = (e: KeyboardEvent<HTMLImageElement>): void => {
    if (e.key === 'Enter') dispatch(toggleMenu({}));
  };

  const displayAvatar = () => {
    return [avatar1, avatar2, avatar3, avatar4, avatar5].find((avatar) =>
      avatar.includes(photoURL!)
    );
  };

  return (
    <UserMenuDetailsStyled $navOpen={isOpen ? '' : 'closed'}>
      <img
        role={isOpen ? 'img' : 'button'}
        tabIndex={isOpen ? -1 : 0}
        src={photoURL ? displayAvatar() : placeholder}
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
