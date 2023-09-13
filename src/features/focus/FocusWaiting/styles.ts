import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const FocusWaitingStyled = styled.div`
  h2 {
    @media ${mediaQueries.phoneLandscape} {
      font-size: 2.4rem;
    }
    @media ${mediaQueries.phonePortrait} {
      font-size: 2rem;
    }
  }

  .focus-fact {
    margin: 0 auto;
    margin-bottom: 2.4rem;

    p {
      max-width: 46rem;
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }

  .saved-sessions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    @media ${mediaQueries.phonePortrait} {
      gap: 0.8rem;
    }

    p {
      margin-bottom: 2.4rem;

      @media ${mediaQueries.phonePortrait} {
        font-size: 1.6rem;
      }
    }
  }

  .sessions-heading {
    display: inline-block;
    padding: 0 2.4rem 0.2rem;
    border-bottom: 1px solid var(--tertiary-opacity);
  }

  .session-button {
    margin: 0 auto;
  }
`;
