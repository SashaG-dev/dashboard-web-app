import { styled } from 'styled-components';

export const RadioStyled = styled.div<{ $isDark?: boolean }>`
  input {
    display: none;
  }

  .radio-div {
    height: 2.4rem;
    width: 2.4rem;
    border: 2px solid var(--tertiary-opacity);
    border-radius: var(--radius-round);
    transition: var(--transition-all);
    cursor: pointer;

    &:hover,
    &.selected {
      transform: scale(1.1);
      border: 2px solid var(--tertiary);
    }

    &--red {
      background-color: ${(props) => (props.$isDark ? '#e84545' : '#d72323')};
    }
    &--yellow {
      background-color: ${(props) => (props.$isDark ? '#FFD460' : '#D44000')};
    }
    &--green {
      background-color: ${(props) => (props.$isDark ? '#4E9F3D' : '#285430')};
    }
    &--blue {
      background-color: ${(props) => (props.$isDark ? '#3490DE' : '#27496D')};
    }
    &--purple {
      background-color: ${(props) => (props.$isDark ? '#8d72e1' : '#645caa')};
    }
  }
`;
