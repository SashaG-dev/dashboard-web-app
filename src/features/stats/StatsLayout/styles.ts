import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const StatsLayoutStyled = styled.div`
  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2.4rem;
    justify-content: center;
    justify-items: center;
    margin-bottom: 2.4rem;
    max-width: calc((30rem * 3) + (2.4rem * 2));
    margin: 0 auto;

    @media ${mediaQueries.tabSmall} {
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    }
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    background-color: var(--secondary);
    padding: 1.6rem;
    border-radius: var(--radius-sm);
    width: 100%;
    max-width: 30rem;
    height: 24rem;

    @media ${mediaQueries.tabSmall} {
      max-width: 24rem;
    }

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.4rem;
      background-color: var(--accent);
      height: 4.8rem;
      width: 4.8rem;
      border-radius: var(--radius-sm);

      @media ${mediaQueries.tabSmall} {
        font-size: 3.2rem;
        height: 4rem;
        width: 4rem;
      }

      svg {
        color: var(--secondary);
        font-size: 2.8rem;

        @media ${mediaQueries.tabSmall} {
          font-size: 2.4rem;
        }
      }
    }

    &-text {
      align-self: center;
    }

    &-total {
      font-size: 4.8rem;
      line-height: 1;
      text-align: center;
    }

    &-type {
      color: var(--tertiary-light);
      font-size: 2rem;
    }
  }
`;
