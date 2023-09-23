import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const FocusLayoutStyled = styled.div`
  .focus-main {
    display: flex;
    justify-content: center;
    padding: 3.2rem 2.4rem;

    @media ${mediaQueries.phoneLandscape} {
      padding: 1.6rem 0.8rem;
    }
  }
`;
