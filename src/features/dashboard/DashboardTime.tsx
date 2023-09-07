import { useState, useEffect } from 'react';
import { getTime } from './headerUtilities';

const DashboardTime = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  return <p className="header-time">{time}</p>;
};
export default DashboardTime;
