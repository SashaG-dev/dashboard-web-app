import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const DashboardStatsStyled = styled.div`
  justify-self: center;

  .stats-heading {
    margin-bottom: 0.8rem;
  }

  .stats-container {
    display: flex;
    gap: 1.6rem;

    @media ${mediaQueries.phoneLandscape} {
      flex-direction: column;
    }
  }

  .stat-card {
    color: var(--primary);
    background-color: var(--accent);
    padding: 1.6rem;
    height: 16rem;
    width: 100%;
    max-width: 16rem;
    border-radius: var(--radius-sm);

    @media ${mediaQueries.phoneLandscape} {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 35rem;
      max-width: 100%;
      height: 12rem;
    }
    @media ${mediaQueries.phonePortrait} {
      width: 28rem;
    }
    @media ${mediaQueries.phoneSmall} {
      width: 24rem;
    }

    svg {
      font-size: 2.4rem;
    }

    h3 {
      font-size: 3.2rem;
      text-align: center;
    }

    p {
      line-height: 1;
      text-align: center;

      @media ${mediaQueries.phoneLandscape} {
        font-size: 2rem;
      }
    }
  }
`;
