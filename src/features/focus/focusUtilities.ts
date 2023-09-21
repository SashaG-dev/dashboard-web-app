import { HOUR, MINUTE } from '../../utils/constants';

export const convertSeconds = (s: number) => {
  let hour = Math.floor(s / HOUR);
  let min = Math.floor(s / MINUTE);
  let sec = s % 60;

  if (min >= 60) {
    min = min - MINUTE * hour;
  }
  if (!hour) {
    return `${min}` + ':' + `${sec}`.padStart(2, '0');
  }

  return (
    hour + ':' + `${min}`.padStart(2, '0') + ':' + `${sec}`.padStart(2, '0')
  );
};
