import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const SettingsLayoutStyled = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 2.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .user-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    .user-img {
      height: 8.4rem;
      width: 8.4rem;
      border: 2px solid var(--accent);
      border-radius: var(--radius-round);
      margin-bottom: 0.8rem;

      @media ${mediaQueries.phoneLandscape} {
        height: 7.2rem;
        width: 7.2rem;
      }
    }

    .details-text {
      text-align: center;
    }
  }

  .settings-heading,
  .settings-h3,
  .form-container,
  .headings-container {
    margin-bottom: 1.6rem;

    @media ${mediaQueries.phoneLandscape} {
      margin-bottom: 0.8rem;
      text-align: center;
    }
  }

  .settings-container {
    background-color: var(--secondary);
    padding: 1.6rem 2.4rem;
    border-radius: var(--radius-md);
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    @media ${mediaQueries.phoneSmall} {
      background-color: transparent;
    }
  }

  .radio-group {
    display: flex;
    gap: 1.6rem;
  }

  .delete-container {
    margin: 0.8rem auto 0;
  }

  label {
    margin-bottom: 0.8rem;
    color: var(--tertiary-light);
  }

  input {
    width: 100%;
    max-width: 60rem;
  }

  p {
    span {
      margin-left: 0.8rem;

      @media ${mediaQueries.phoneLandscape} {
        margin: 0;
        font-size: 1.6rem;
      }
    }
  }

  .password {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    justify-content: space-between;
    width: 40rem;

    @media ${mediaQueries.phoneLandscape} {
      width: 100%;
    }
  }

  .delete-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    .delete-row {
      justify-content: center;
    }
  }

  .avatar-options {
    display: flex;
    gap: 0.8rem;
  }

  .option {
    height: 4.8rem;
    width: 4.8rem;
    border: 2px solid var(--tertiary);
    border-radius: var(--radius-sm);
    overflow: hidden;
    transition: var(--transition-all);
    cursor: pointer;

    @media ${mediaQueries.phoneLandscape} {
      height: 3.2rem;
      width: 3.2rem;
      border-radius: var(--radius-round);
    }

    &:hover,
    &:focus-visible,
    &.selected {
      outline-offset: 2px;
      border: 2px solid var(--accent);

      & .avatar-img {
        transform: scale(1.1);
      }
    }

    .avatar-img {
      width: 100%;
      transition: var(--transition-all);
    }
  }
`;
