import { MouseEvent, KeyboardEvent } from 'react';
import { FormRowStyled } from '../../components/Form';
import { updateUserAvatar } from '../../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
import avatar5 from '../../assets/avatar5.jpg';

const UpdateAvatar = () => {
  const { photoURL } = useAppSelector((state) => state.user.userData);
  const dispatch = useAppDispatch();

  const setClassName = (name: string) => {
    return `option ${photoURL === name ? 'selected' : ''}`;
  };

  const onClick = (
    e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => {
    const { type } = e as MouseEvent;
    const { key } = e as KeyboardEvent;
    const target = e.target as HTMLElement;
    if (key === 'Enter' || type === 'click') {
      const avatar = (target.closest('.option') as HTMLDivElement).dataset.src;
      dispatch(updateUserAvatar({ avatar }));
    }
  };

  return (
    <FormRowStyled>
      <p>avatar:</p>

      <div className="avatar-options" role="listbox">
        <div
          className={setClassName('avatar1')}
          role="option"
          tabIndex={0}
          data-src="avatar1"
          aria-selected={photoURL === 'avatar1'}
          title="Change avatar"
          aria-label="change current avatar image"
          onClick={(e) => onClick(e)}
          onKeyDown={(e) => onClick(e)}
        >
          <img
            src={avatar1}
            alt="a satellite image of planet Earth"
            className="avatar-img"
          />
        </div>
        <div
          className={setClassName('avatar2')}
          role="option"
          tabIndex={0}
          data-src="avatar2"
          aria-selected={photoURL === 'avatar2'}
          title="Change avatar"
          aria-label="change current avatar image"
          onClick={(e) => onClick(e)}
          onKeyDown={(e) => onClick(e)}
        >
          <img
            src={avatar2}
            alt="a photo of a white cat sitting near plants"
            className="avatar-img"
          />
        </div>
        <div
          className={setClassName('avatar3')}
          role="option"
          tabIndex={0}
          data-src="avatar3"
          aria-selected={photoURL === 'avatar3'}
          title="Change avatar"
          aria-label="change current avatar image"
          onClick={(e) => onClick(e)}
          onKeyDown={(e) => onClick(e)}
        >
          <img
            src={avatar3}
            alt="a photo of the Northern Lights in Greenland"
            className="avatar-img"
          />
        </div>
        <div
          className={setClassName('avatar4')}
          role="option"
          tabIndex={0}
          data-src="avatar4"
          aria-selected={photoURL === 'avatar4'}
          title="Change avatar"
          aria-label="change current avatar image"
          onClick={(e) => onClick(e)}
          onKeyDown={(e) => onClick(e)}
        >
          <img
            src={avatar4}
            alt="a photo of an orange butterfly flying among pink flowers"
            className="avatar-img"
          />
        </div>
        <div
          className={setClassName('avatar5')}
          role="option"
          tabIndex={0}
          data-src="avatar5"
          aria-selected={photoURL === 'avatar5'}
          title="Change avatar"
          aria-label="change current avatar image"
          onClick={(e) => onClick(e)}
          onKeyDown={(e) => onClick(e)}
        >
          <img
            src={avatar5}
            alt="a photo of a happy Border Collie"
            className="avatar-img"
          />
        </div>
      </div>
    </FormRowStyled>
  );
};
export default UpdateAvatar;
