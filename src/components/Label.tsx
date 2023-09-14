import { ReactNode } from 'react';
import { styled } from 'styled-components';

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

type LabelPropsType = {
  label: string;
  htmlFor: string;
  children?: ReactNode | null;
};

export const LabelTop = ({ label, htmlFor, children }: LabelPropsType) => {
  return (
    <LabelStyled htmlFor={htmlFor}>
      {label}
      {children}
    </LabelStyled>
  );
};

export const LabelBottom = ({ label, htmlFor, children }: LabelPropsType) => {
  return (
    <LabelStyled htmlFor={htmlFor}>
      {children}
      {label}
    </LabelStyled>
  );
};
