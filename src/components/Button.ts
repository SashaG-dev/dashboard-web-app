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
  iconLarge: css`
    color: var(--accent);
    font-size: 4.8rem;
    border-radius: var(--radius-round);

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 5px;
    }

    &:disabled {
      color: var(--secondary);
    }
  `,
  iconSmall: css`
    font-size: 2rem;
    border-radius: var(--radius-round);

    &:hover,
    &:focus-visible,
    &:active {
      outline: none;
      transform: scale(1.1);
    }

    &:focus-visible {
      outline: 1px solid currentColor;
      outline-offset: 7px;
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

    &:disabled {
      background-color: var(--secondary);
      color: var(--tertiary-opacity);
      cursor: default;
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
  underline: css`
    font-size: 1.6rem;

    &:hover,
    &:focus-visible {
      color: var(--tertiary);
      outline: none;
      text-decoration: underline;
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
