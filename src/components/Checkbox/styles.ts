import { styled } from 'styled-components';

export const CheckboxStyled = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;

    input {
      display: none;

      &:checked ~ .checkbox-text {
        opacity: 0.9;
        text-decoration: line-through;
      }

      &:checked ~ .checkbox-span {
        background-color: currentColor;
      }

      &:disabled ~ .checkbox-text,
      &:disabled ~ .checkbox-span {
        opacity: 0.5;
      }
    }

    span {
      transition: var(--transition-all);
    }

    .checkbox-text {
      line-height: 1;

      &:hover,
      &:focus-visible {
        opacity: 0.9;
        text-decoration: line-through;
      }
    }

    .checkbox-span {
      display: inline-block;
      flex-shrink: 0;
      height: 1.4rem;
      width: 1.4rem;
      border: 1px solid currentColor;
      border-radius: 2px;

      &:hover,
      &:focus-visible {
        outline: none;
        background-color: var(--secondary);
        transform: scale(1.08);
      }
    }
  }
`;
