import {
  BsLightningCharge,
  BsPencilSquare,
  BsCalendarHeart,
  BsFillCalendarCheckFill,
  BsClockHistory,
  BsHourglassSplit,
} from 'react-icons/bs';

type Props = {
  stat: number;
  icon: 'tasks' | 'items' | 'days' | 'hours' | 'minutes' | 'notes';
  type: string;
};

const Stat = ({ stat, icon, type }: Props) => {
  const displayIcon = () => {
    if (icon === 'tasks') return <BsFillCalendarCheckFill aria-hidden="true" />;
    else if (icon === 'items') return <BsCalendarHeart aria-hidden="true" />;
    else if (icon === 'days') return <BsLightningCharge aria-hidden="true" />;
    else if (icon === 'hours') return <BsHourglassSplit aria-hidden="true" />;
    else if (icon === 'minutes') return <BsClockHistory aria-hidden="true" />;
    else return <BsPencilSquare aria-hidden="true" />;
  };
  return (
    <div className="stat">
      <div className="stat-icon">{displayIcon()}</div>
      <div className="stat-text">
        <h2 className="stat-total" aria-labelledby="stat-tasks">
          {stat}
        </h2>
        <p className="stat-type" id="stat-tasks">
          {type}
        </p>
      </div>
    </div>
  );
};
export default Stat;
