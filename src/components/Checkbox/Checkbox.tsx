import { ReactNode } from 'react';
import { CheckboxStyled } from './styles';

type CheckboxType = {
  id: string;
  onChange: () => void;
  checked: boolean;
  disabled?: boolean;
  title: string;
  ariaLabel?: string;
  children: ReactNode;
};

const Checkbox = ({
  id,
  onChange,
  checked,
  disabled = false,
  title,
  ariaLabel,
  children,
}: CheckboxType) => {
  return (
    <CheckboxStyled>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <span
          className="checkbox-span"
          tabIndex={0}
          title={title}
          aria-label={ariaLabel || ''}
          role="checkbox"
          aria-checked={checked}
        ></span>
        <span className="checkbox-text">{children}</span>
      </label>
    </CheckboxStyled>
  );
};
export default Checkbox;
