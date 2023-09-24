import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const NotebookLayoutStyled = styled.div`
  .notebook-add {
    position: fixed;
    right: 1.6rem;
    bottom: 2.4rem;
    z-index: 5;

    &.rotate {
      transform: rotate(135deg);

      @media (prefers-reduced-motion) {
        transform: rotate(45deg);
      }
    }

    @media ${mediaQueries.desktop} {
      position: absolute;
    }
    @media ${mediaQueries.tabPortrait} {
      bottom: 9.6rem;
      font-size: 4.8rem;
    }
    @media ${mediaQueries.phoneLandscape} {
      font-size: 4rem;
    }
  }
`;
