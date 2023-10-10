import { Link, useNavigate } from 'react-router-dom';
import { BsFillPlayCircleFill, BsArrowRight } from 'react-icons/bs';
import { ButtonStyled } from '../../../components/Button';
import { setCurrentTimer, startFocus } from '../../../store/slices/focusSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { DashboardFocusStyled } from './styles';

const DashboardFocus = () => {
  const { saved, status } = useAppSelector((state) => state.focus);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const startSession = () => {
    const { hours, minutes, seconds, name } = saved[0];
    dispatch(setCurrentTimer({ hours, minutes, seconds, name }));
    dispatch(startFocus());
    navigate('/focus');
  };

  const displaySession = () => {
    return (
      <div className="session">
        <h3 className="session-heading">{saved[0].name}</h3>
        <p className="session-time">
          {saved[0].hours
            ? `${saved[0].hours}:${saved[0].minutes}:${saved[0].seconds}`
            : `${saved[0].minutes}:${saved[0].seconds}`}
        </p>
        <ButtonStyled
          title="Start session"
          aria-label={`Start ${saved[0].name}`}
          $type="iconLarge"
          onClick={startSession}
        >
          <BsFillPlayCircleFill aria-hidden="true" />
        </ButtonStyled>
      </div>
    );
  };

  const displayPlaceholder = () => {
    return (
      <div className="session">
        <h3 className="session-heading">No sessions saved.</h3>
        <Link
          to="/focus"
          title="Go to focus page"
          aria-label="go to focus page"
        >
          <BsArrowRight aria-hidden="true" />
        </Link>
      </div>
    );
  };

  const showDisplay = () => {
    if (status === 'focusing') return <h1>Focusing...</h1>;
    else return saved[0] ? displaySession() : displayPlaceholder();
  };

  return (
    <DashboardFocusStyled>
      <h2 className="focus-heading">Ready to Focus?</h2>
      <div className="session-container">{showDisplay()}</div>
    </DashboardFocusStyled>
  );
};
export default DashboardFocus;
