import { styled } from 'styled-components';

export const SaveDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;

  .edit-save {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;

    small {
      padding: 0.4rem;

      &.red {
        color: var(--error);
      }
    }
  }

  .time-details {
    p {
      font-size: 2.4rem;
    }
  }
`;
