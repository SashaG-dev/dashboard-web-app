import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const UserMenuNavStyled = styled.nav`
  border-bottom: 1px solid var(--tertiary-opacity);
  padding-bottom: 1.6rem;

  @media ${mediaQueries.tabPortrait} {
    border: none;
    border-right: 1px solid var(--tertiary-opacity);
    padding: 0;
    padding-right: 1.6rem;
  }

  .links {
    display: grid;
    grid-template-rows: repeat(7, min-content);
    gap: 0.8rem;

    @media ${mediaQueries.tabPortrait} {
      grid-template-rows: min-content;
      grid-template-columns: repeat(7, min-content);
    }
    @media ${mediaQueries.phonePortrait} {
      gap: 0.2rem;
    }
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

      @media ${mediaQueries.phonePortrait} {
        padding: 0.6rem;
      }
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
