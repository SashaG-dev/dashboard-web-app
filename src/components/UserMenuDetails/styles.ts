import { styled, css } from 'styled-components';
import { StyledVariations } from '../../types/utilTypes';
import { mediaQueries } from '../../styles/mediaQueries';

const variations: StyledVariations = {
  closed: css`
    grid-template-columns: 1fr;

    .user-text {
      display: none;
    }

    .toggle-btn {
      display: none;
    }

    .user-img {
      display: block;
      height: 2.7rem;
      width: 2.7rem;
      border-radius: var(--radius-round);
      cursor: pointer;

      &:hover {
        border: 2px solid var(--accent);
        transform: scale(1.12);
      }
    }
  `,
};

export const UserMenuDetailsStyled = styled.header<{ $navOpen?: string }>`
  color: var(--tertiary);
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 1.6rem;
  align-items: start;
  border-bottom: 1px solid var(--tertiary-opacity);
  padding-bottom: 1.8rem;

  .custom-tag {
    font-size: 1.6rem;
  }

  .user-img {
    height: 4.8rem;
    width: 4.8rem;
    background-color: var(--primary);
    border: 2px solid var(--tertiary);
    border-radius: var(--radius-sm);
    transition: var(--transition-all);
    cursor: default;
  }

  .toggle-btn {
    align-self: center;
    display: flex;
    color: var(--tertiary);
    height: 3.2rem;
    width: 3.2rem;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-round);

    &:hover,
    &:focus-visible {
      background-color: var(--tertiary);
      color: var(--primary);
    }
  }

  ${(props) => (props.$navOpen ? variations[props.$navOpen] : '')}

  @media ${mediaQueries.tabPortrait} {
    display: none;
  }
`;
