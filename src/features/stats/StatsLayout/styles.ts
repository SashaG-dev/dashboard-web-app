import { styled } from 'styled-components';

export const StatsLayoutStyled = styled.div`
  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.6rem;
    justify-content: center;
    justify-items: center;
  }

  .stat {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    background-color: var(--secondary);
    padding: 1.6rem;
    border-radius: var(--radius-sm);
    width: 100%;
    max-width: 30rem;

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.4rem;
      background-color: var(--accent);
      height: 4.8rem;
      width: 4.8rem;
      border-radius: var(--radius-round);

      svg {
        color: var(--secondary);
        font-size: 2.8rem;
      }
    }

    &-total {
      font-size: 4.8rem;
      line-height: 1;
    }

    &-type {
      color: var(--tertiary-light);
    }
  }
`;
