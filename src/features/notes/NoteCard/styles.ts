import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const NoteCardStyled = styled.div`
  background-color: var(--secondary);
  border-radius: var(--radius-sm);
  padding: 1.6rem;
  min-height: 28rem;
  width: 90%;

  @media ${mediaQueries.tabLandscape} {
    width: 42rem;
  }
  @media ${mediaQueries.phoneLandscape} {
    width: 32rem;
  }
  @media ${mediaQueries.phonePortrait} {
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

    small {
      &.red {
        color: var(--error);
      }
    }
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
      overflow-wrap: break-word;
      inline-size: 95%;

      @media ${mediaQueries.phoneSmall} {
        font-size: 1.6rem;
      }
    }

    .note-more {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0.4rem;

      small.red {
        color: var(--error);
      }
    }
  }
`;
