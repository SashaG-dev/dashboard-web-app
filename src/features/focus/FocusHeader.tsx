import { getTime } from '../../hooks/getTime';

const FocusHeader = () => {
  const { time } = getTime();

  return (
    <header className="focus-header" aria-label="focus header">
      <h1 className="focus-heading">Focus</h1>

      <p>{time}</p>
    </header>
  );
};
export default FocusHeader;
