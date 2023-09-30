import { styled } from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50rem;
  background-color: var(--secondary);
  border-radius: var(--radius-sm);
  padding: 1.6rem 2.4rem;
  z-index: 5;

  @media ${mediaQueries.tabSmall} {
    width: 46rem;
  }
  @media ${mediaQueries.phoneLandscape} {
    width: 75%;
  }
  @media ${mediaQueries.phoneSmall} {
    width: 90%;
  }

  .modal-headings {
    margin-bottom: 2.4rem;
  }

  .modal-heading {
    line-height: 1.2;

    @media ${mediaQueries.tabSmall} {
      font-size: 2.4rem;
    }
    @media ${mediaQueries.phonePortrait} {
      font-size: 2rem;
    }
  }

  .modal-btns {
    gap: 1.6rem;
  }
`;
