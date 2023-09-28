import { styled } from 'styled-components';

export const CheckboxSliderStyled = styled.div`
  .slider-div {
    height: 3rem;
    width: 6.4rem;
    background-color: var(--tertiary-opacity);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;

    &.start {
      justify-content: flex-start;
    }
    &.end {
      justify-content: flex-end;
    }
  }

  .slider-btn {
    height: 2.4rem;
    width: 2.4rem;
    background-color: var(--accent);
    border-radius: var(--radius-round);
    cursor: pointer;

    &.start {
      margin-left: 0.3rem;
    }
    &.end {
      margin-right: 0.3rem;
    }
  }

  input {
    display: none;
  }
`;
