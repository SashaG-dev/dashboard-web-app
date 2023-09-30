import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const UserSignUpStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .signup-heading {
    line-height: 1;
    text-align: center;
    margin-bottom: 1.6rem;
  }

  .signup-container {
    background-color: var(--secondary);
    width: 100%;
    max-width: 48rem;
    padding: 2.4rem;
    border-radius: var(--radius-sm);
    margin-bottom: 1.6rem;

    @media ${mediaQueries.phoneLandscape} {
      padding: 1.6rem;
      background-color: transparent;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  input {
    width: 100%;
  }

  a {
    &:link,
    &:visited {
      color: var(--accent);
    }

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  small {
    text-align: center;
  }
`;
