import { ReactNode } from 'react';
import { styled } from 'styled-components';

const LabelStyled = styled.label<{ $isColumn?: boolean }>`
  display: flex;
  align-items: ${(props) => (props.$isColumn ? 'flex-start' : 'center')};
  gap: 0.8rem;
  flex-direction: ${(props) => (props.$isColumn ? 'column' : 'row')};
  width: ${(props) => (props.$isColumn ? '100%' : 'auto')};
`;

type LabelPropsType = {
  label: string;
  htmlFor: string;
  isColumn?: boolean;
  children?: ReactNode | null;
};

export const LabelTop = ({
  label,
  htmlFor,
  children,
  isColumn = false,
}: LabelPropsType) => {
  return (
    <LabelStyled htmlFor={htmlFor} $isColumn={isColumn}>
      {label}
      {children}
    </LabelStyled>
  );
};

export const LabelBottom = ({
  label,
  htmlFor,
  children,
  isColumn = false,
}: LabelPropsType) => {
  return (
    <LabelStyled htmlFor={htmlFor} $isColumn={isColumn}>
      {children}
      {label}
    </LabelStyled>
  );
};
