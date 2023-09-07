import { styled } from 'styled-components';

export const UserMenuStyled = styled.div`
  background-color: var(--primary);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
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

  .settings-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: start;
    justify-content: center;

    button {
      color: var(--tertiary);
    }
  }

  &.closed {
    width: 6rem;
    align-items: flex-start;

    ul,
    .settings-container {
      padding: 0 0.2rem;
    }

    a,
    button:not(.toggle-btn) {
      display: inline-flex;
      padding: 0.3rem;
    }

    svg {
      height: 2.7rem;
    }

    span {
      display: none;
    }
  }
`;
