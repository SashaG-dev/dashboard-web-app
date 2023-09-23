import { ReactNode } from 'react';
import { getTime } from '../../hooks/getTime';
import { HeaderStyled } from './styles';

type HeaderProps = {
  heading: string | undefined;
  name: string;
  children?: ReactNode;
  displayTime?: boolean;
};

const Header = ({ displayTime = true, ...props }: HeaderProps) => {
  const { time } = getTime();

  const { heading, name, children } = props;

  return (
    <HeaderStyled className="header" aria-label={`${name} header`}>
      <h1 className="header-heading">{heading}</h1>

      <div className="header-details">
        {children}
        {displayTime ? <p>{time}</p> : ''}
      </div>
    </HeaderStyled>
  );
};
export default Header;
