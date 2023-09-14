import { useAppSelector } from '../../../hooks/hooks';
import { FocusingStyled } from './styles';

const Focusing = () => {
  const { currentTimer } = useAppSelector((state) => state.focus);

  return (
    <FocusingStyled>
      <h2 className="focus-name">{currentTimer.name || 'Unnamed Session'}</h2>

      <p>
        {currentTimer.hours}:{currentTimer.minutes.padStart(2, '0')}:
        {currentTimer.seconds.padStart(2, '0')}
      </p>
    </FocusingStyled>
  );
};
export default Focusing;
