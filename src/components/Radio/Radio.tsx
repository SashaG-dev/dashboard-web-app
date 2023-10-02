import { MouseEvent, KeyboardEvent } from 'react';
import { RadioStyled } from './styles';

type Props = {
  id: string;
  name: string;
  state: string;
  onChange: (
    e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => void;
  isDark: boolean;
};

const Radio = ({ id, name, state, onChange, isDark }: Props) => {
  const divClasses = () => {
    if (state === id) return `radio-div radio-div--${id} selected`;
    else return `radio-div radio-div--${id}`;
  };

  return (
    <RadioStyled $isDark={isDark}>
      <label htmlFor={id} title={id}>
        <input
          type="radio"
          name={name}
          id={id}
          className="radio"
          checked={state === id}
          onChange={() => {}}
        />
        <div
          className={divClasses()}
          role="radio"
          aria-labelledby={`${id}-label`}
          aria-checked={state === id}
          tabIndex={0}
          data-id={id}
          onClick={(e) => onChange(e)}
          onKeyDown={(e) => onChange(e)}
        ></div>
        <span className="visually-hidden" id={`${id}-label`}>
          Change user theme to {id}
        </span>
      </label>
    </RadioStyled>
  );
};
export default Radio;
