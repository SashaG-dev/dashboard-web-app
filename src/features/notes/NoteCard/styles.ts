import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const NoteCardStyled = styled.div`
  background-color: var(--secondary);
  border-radius: var(--radius-sm);
  padding: 1.6rem;
  min-height: 28rem;

  @media ${mediaQueries.tabPortrait} {
    width: 100%;
    max-width: 42rem;
  }
  @media ${mediaQueries.phoneLandscape} {
    width: 28rem;
  }
  @media ${mediaQueries.phoneSmall} {
    width: 24rem;
  }

  .note-headings {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1.6rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid var(--tertiary-opacity);
  }

  .note-heading {
    line-height: 1;

    @media ${mediaQueries.phoneLandscape} {
      font-size: 2.4rem;
    }
    @media ${mediaQueries.phonePortrait} {
      font-size: 2.2rem;
    }
  }

  .note-main {
    p {
      line-height: 1.2;

      @media ${mediaQueries.phoneSmall} {
        font-size: 1.6rem;
      }
    }
  }
`;
