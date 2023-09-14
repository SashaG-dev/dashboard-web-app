import { getTime } from '../../hooks/getTime';
import { useAppSelector } from '../../hooks/hooks';

const FocusHeader = () => {
  const { status } = useAppSelector((state) => state.focus);
  const { time } = getTime();

  return (
    <header className="focus-header" aria-label="focus header">
      <h1 className="focus-heading">Focus</h1>
      <p>{status !== 'focusing' && time}</p>
    </header>
  );
};
export default FocusHeader;
