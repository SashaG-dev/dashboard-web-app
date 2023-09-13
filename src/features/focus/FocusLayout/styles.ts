import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const FocusLayoutStyled = styled.div`
  .focus-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--tertiary-opacity);
  }

  .focus-heading {
    @media ${mediaQueries.phoneLandscape} {
      font-size: 2.8rem;
    }
  }

  .focus-main {
    display: flex;
    justify-content: center;
    padding: 3.2rem 2.4rem;

    @media ${mediaQueries.phoneLandscape} {
      padding: 1.6rem 0.8rem;
    }
  }
`;
