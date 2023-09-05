import { styled, css } from 'styled-components';
import { StyledVariations } from '../../types/utilTypes';

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
    }
  `,
};

export const UserMenuDetailsStyled = styled.header<{ $navOpen?: string }>`
  color: var(--white);
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 1.6rem;
  align-items: start;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 1.8rem;

  .custom-tag {
    font-size: 1.6rem;
  }

  .user-img {
    height: 4.8rem;
    width: 4.8rem;
    background-color: var(--black);
    border: 2px solid var(--white);
    border-radius: var(--radius-sm);
    transition: var(--transition-all);
    cursor: default;
  }

  .toggle-btn {
    align-self: center;
    display: flex;
    color: var(--white);
    height: 3.2rem;
    width: 3.2rem;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-round);

    &:hover,
    &:focus-visible {
      background-color: var(--white);
      color: var(--black);
    }
  }

  ${(props) => (props.$navOpen ? variations[props.$navOpen] : '')}
`;
