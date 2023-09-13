import { getTime } from '../../../hooks/getTime';
import { FocusLayoutStyled } from './styles';
import FocusWaiting from '../FocusWaiting/FocusWaiting';
import { useAppSelector } from '../../../hooks/hooks';

const FocusLayout = () => {
  const { status } = useAppSelector((state) => state.focus);
  const { time } = getTime();

  return (
    <FocusLayoutStyled>
      <header className="focus-header" aria-label="focus header">
        <h1 className="focus-heading">Focus</h1>
        <p>{time}</p>
      </header>

      <section className="focus-main">
        {status === 'waiting' && <FocusWaiting />}
      </section>
    </FocusLayoutStyled>
  );
};
export default FocusLayout;
