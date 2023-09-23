import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const NotebookLayoutStyled = styled.div`
  position: relative;

  .notebook-add {
    position: fixed;
    right: 1.6rem;
    bottom: 2.4rem;

    @media ${mediaQueries.tabPortrait} {
      bottom: 9.6rem;
    }
  }
`;
