import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const DashboardTasksStyled = styled.div`
  .tasks-container {
    max-width: 48rem;
    min-height: 28rem;
    background-color: var(--secondary);
    border-radius: var(--radius-md);
    position: relative;

    @media ${mediaQueries.phoneLandscape} {
      width: auto;
      background-color: transparent;
    }

    .card {
      position: absolute;
      top: 2rem;
      left: 1.6rem;
      transition: transform 0.3s;

      @media ${mediaQueries.phoneLandscape} {
        left: 0;
      }
      @media ${mediaQueries.phonePortrait} {
        left: 50%;
        transform: translateX(-50%);
      }

      &:first-of-type {
        top: 10rem;
        left: 10rem;
        z-index: 1;

        @media ${mediaQueries.phoneLandscape} {
          left: 5rem;
        }
        @media ${mediaQueries.phonePortrait} {
          left: 50%;
        }
      }

      &:hover {
        z-index: 2;
        transform: translateY(-5px) scale(1.02);

        @media ${mediaQueries.phonePortrait} {
          transform: translate(-50%, -5px) scale(1.02);
        }
      }
    }
  }
`;
