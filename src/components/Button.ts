import { styled, css } from 'styled-components';
import { StyledVariations } from '../types/utilTypes';

const variations: StyledVariations = {
  icon: css`
    font-size: 2.4rem;
    border: 2px solid transparent;
    border-radius: var(--radius-round);
    padding: 0.8rem;

    &:hover,
    &:focus-visible,
    &:active {
      outline: none;
      border: 2px solid currentColor;
    }
  `,
  iconSmall: css`
    font-size: 2rem;

    &:hover,
    &:focus-visible,
    &:active {
      outline: none;
      transform: scale(1.1);
    }
  `,
  secondary: css`
    color: var(--tertiary);
    font-size: 1.6rem;
    background-color: var(--secondary);
    padding: 0.8rem 1.6rem;
    border-radius: var(--radius-sm);

    &:hover,
    &:focus-visible {
      color: var(--primary);
      background-color: var(--tertiary);
    }
  `,
  accent: css`
    color: var(--primary);
    font-size: 1.6rem;
    background-color: var(--accent);
    padding: 0.8rem 1.6rem;
    border-radius: var(--radius-sm);

    &:hover,
    &:focus-visible {
      background-color: var(--tertiary);
    }
  `,
};

export const ButtonStyled = styled.button<{ $type?: string }>`
  color: inherit;
  transition: var(--transition-all);
  ${(props) => (props.$type ? variations[props.$type] : '')}
`;

export const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
