import { styled } from 'styled-components';

export const LoginLayoutStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-headings {
    margin-bottom: 1.6rem;
  }

  .login-heading,
  .login-subheading {
    line-height: 1;
    text-align: center;
    margin-bottom: 1.2rem;
  }

  .login-subheading {
    color: var(--tertiary-light);
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
