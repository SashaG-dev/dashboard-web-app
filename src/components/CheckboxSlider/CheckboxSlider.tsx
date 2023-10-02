import { KeyboardEvent, MouseEvent } from 'react';
import { CheckboxSliderStyled } from './styles';

type Props = {
  id: string;
  label: string;
  title: string;
  checked: boolean;
  onChange: (e: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement>) => void;
};

const CheckboxSlider = ({ id, label, title, checked, onChange }: Props) => {
  return (
    <CheckboxSliderStyled>
      <label
        htmlFor={id}
        className="slider-label"
        tabIndex={0}
        role="checkbox"
        onKeyDown={(e) => onChange(e)}
        title={title}
      >
        <span className="visually-hidden">{label}</span>
        <div className={`slider-div ${checked ? 'start' : 'end'}`}>
          <div className={`slider-btn ${checked ? 'start' : 'end'}`}></div>
        </div>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={checked}
          className="slider-checkbox"
          onChange={(e: any) => onChange(e)}
        />
      </label>
    </CheckboxSliderStyled>
  );
};
export default CheckboxSlider;
