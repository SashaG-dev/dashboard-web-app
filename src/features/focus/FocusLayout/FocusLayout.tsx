import Header from '../../../components/Header/Header';
import FocusWaiting from '../FocusWaiting/FocusWaiting';
import FocusEditing from '../FocusEditing/FocusEditing';
import Focusing from '../Focusing/Focusing';
import { useAppSelector } from '../../../hooks/hooks';
import { FocusLayoutStyled } from './styles';

const FocusLayout = () => {
  const { status } = useAppSelector((state) => state.focus);

  return (
    <FocusLayoutStyled>
      <Header heading="Focus" name="focus" />

      <section className="focus-main">
        {status === 'waiting' && <FocusWaiting />}
        {status === 'editing' && <FocusEditing />}
        {status === 'focusing' && <Focusing />}
      </section>
    </FocusLayoutStyled>
  );
};
export default FocusLayout;
