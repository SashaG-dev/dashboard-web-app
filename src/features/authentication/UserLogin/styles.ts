import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const UserLoginStyled = styled.div`
  background-color: var(--secondary);
  border-radius: var(--radius-sm);
  padding: 3.2rem;
  width: 100%;
  max-width: 48rem;
  margin-bottom: 0.8rem;

  @media ${mediaQueries.phoneLandscape} {
    padding: 2.4rem;
  }
  @media ${mediaQueries.phonePortrait} {
    background-color: transparent;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .row-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    svg {
      color: var(--accent);
      font-size: 3.2rem;

      @media ${mediaQueries.phoneLandscape} {
        font-size: 2.4rem;
      }
      @media ${mediaQueries.phonePortrait} {
        display: none;
      }
    }

    input {
      width: 90%;

      @media ${mediaQueries.phonePortrait} {
        width: 100%;
      }
    }
  }

  .login-btn,
  .demo-btn {
    width: 75%;
    margin: 0 auto;

    @media ${mediaQueries.phonePortrait} {
      width: 100%;
    }
  }

  a {
    display: inline-block;
    margin: 0 auto;
  }
`;
