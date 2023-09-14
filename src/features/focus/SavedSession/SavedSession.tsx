import { MouseEvent, KeyboardEvent } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { SavedFocusType } from '../../../types/SavedFocusType';
import { SavedSessionStyled } from './styles';

type SavedSessionType = {
  onClick: (
    e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => void;
};

const SavedSession = (props: SavedFocusType & SavedSessionType) => {
  const {
    currentTimer: { name },
  } = useAppSelector((state) => state.focus);

  return (
    <SavedSessionStyled
      tabIndex={0}
      className={`saved-session ${name === props.name ? 'selected' : ''}`}
      aria-label="choose this study session"
      title="Choose this study session"
      role="option"
      aria-selected={name === props.name}
      onClick={props.onClick}
      onKeyDown={props.onClick}
    >
      <span>{props.name}</span>
      <span className="saved-time text-light">
        {props.hours !== '0' ? `${props.hours}:` : ''}
        {props.minutes}:{props.seconds}
      </span>
    </SavedSessionStyled>
  );
};
export default SavedSession;
