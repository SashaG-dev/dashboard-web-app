import styled from 'styled-components';

export const SavedSessionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 24rem;
  background-color: var(--secondary);
  padding: 1.2rem 0.8rem;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition-all);

  &:focus-visible,
  &:hover {
    border: 1px solid var(--tertiary);
  }

  &.selected {
    color: var(--primary);
    background-color: var(--tertiary);

    &:focus-visible {
      outline: 1px solid #fff;
      outline-offset: 2px;
    }

    .saved-time {
      color: var(--primary);
    }
  }
`;
