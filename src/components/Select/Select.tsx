import { ChangeEvent } from 'react';
import { SelectStyled } from './styles';

type SelectPropsType = {
  options: number[] | string[];
  value: string;
  name: string;
  id: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  options,
  value,
  name,
  title,
  id,
  onChange,
}: SelectPropsType) => {
  return (
    <SelectStyled
      name={name}
      value={value}
      id={id}
      title={title}
      onChange={(e) => onChange(e)}
    >
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </SelectStyled>
  );
};
export default Select;
