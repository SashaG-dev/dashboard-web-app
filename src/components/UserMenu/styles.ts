import { styled } from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const UserMenuStyled = styled.div`
  background-color: var(--primary);
  border-right: 1px solid var(--tertiary-opacity);
  width: 24rem;
  height: 100%;
  max-height: 100vh;
  padding: 1.6rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  transition: width 0.3s;

  @media ${mediaQueries.tabPortrait} {
    background-color: var(--primary-opacity);
    backdrop-filter: blur(2px);
    flex-direction: row;
    height: 8rem;
    width: 100%;
    bottom: 0;
    top: auto;
    justify-content: center;
    border-right: none;
    border-top: 1px solid var(--tertiary-opacity);
    z-index: 2;

    span {
      display: none;
    }
    svg {
      height: 2.7rem;
    }
  }
  @media ${mediaQueries.phoneSmall} {
    gap: 0.8rem;
  }

  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: start;
    justify-content: center;

    @media ${mediaQueries.tabPortrait} {
      align-items: center;

      button {
        padding: 0.8rem;
        display: inline-block;
      }
    }

    button {
      color: var(--tertiary);
    }
  }

  &.closed {
    width: 6rem;
    align-items: flex-start;

    @media ${mediaQueries.tabPortrait} {
      height: 8rem;
      width: 100%;
      align-items: center;
    }

    ul,
    .settings-container {
      padding: 0 0.2rem;
    }

    a,
    button:not(.toggle-btn) {
      display: inline-flex;
      padding: 0.3rem;
    }

    a {
      @media ${mediaQueries.tabPortrait} {
        font-size: 1.8rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.8rem;
      }
    }

    svg {
      height: 2.7rem;
    }

    span {
      display: none;
    }
  }
`;
