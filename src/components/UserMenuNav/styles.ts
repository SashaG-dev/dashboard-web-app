import { styled } from 'styled-components';

export const UserMenuNavStyled = styled.nav`
  border-bottom: 1px solid var(--tertiary-opacity);
  padding-bottom: 1.6rem;

  .links {
    display: grid;
    grid-template-rows: repeat(7, min-content);
    gap: 0.8rem;
  }

  a {
    &:link,
    &:visited {
      color: var(--tertiary);
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.8rem;
      border-radius: var(--radius-sm);
      transition: background-color 0.3s, color 0.3s;
    }

    &:hover,
    &:active,
    &:focus-visible,
    &.active {
      color: var(--primary);
      background-color: var(--accent);
    }
  }
`;
