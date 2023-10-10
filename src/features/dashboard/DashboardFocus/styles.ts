import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const DashboardFocusStyled = styled.div`
  margin: 0 auto;

  .focus-heading {
    margin-bottom: 0.8rem;
  }

  .session-container {
    background-color: var(--secondary);
    height: 16rem;
    width: 48rem;
    padding: 1.6rem 2.4rem;
    border-radius: var(--radius-md);

    @media ${mediaQueries.phoneLandscape} {
      width: 35rem;
    }
    @media ${mediaQueries.phonePortrait} {
      width: 28rem;
    }
    @media ${mediaQueries.phonePortrait} {
      width: 24rem;
    }

    .session {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .session-heading {
      color: var(--tertiary-light);
      font-size: 2.4rem;
    }

    .session-time {
      font-size: 4rem;
      text-align: center;

      @media ${mediaQueries.phoneLandscape} {
        font-size: 3.2rem;
      }
    }

    a {
      &:link,
      &:visited {
        color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--accent);
        height: 4rem;
        width: 4rem;
        border-radius: var(--radius-round);
      }

      &:hover,
      &:active,
      &:focus-visible {
        color: var(--primary);
        background-color: var(--tertiary);
      }
    }

    button,
    a {
      align-self: flex-end;
      margin-top: -1.6rem;
    }
  }
`;
