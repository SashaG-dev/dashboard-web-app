import { styled } from 'styled-components';

export const AddTaskStyled = styled.form`
  display: flex;
  gap: 1.6rem;
  position: relative;

  small {
    color: var(--tertiary);
    background-color: var(--primary);
    position: absolute;
    bottom: -3.8rem;
    left: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;

    &.red {
      color: var(--error);
    }
  }
`;
