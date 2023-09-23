import { styled } from 'styled-components';

export const NoteCardStyled = styled.div`
  background-color: var(--secondary);
  border-radius: var(--radius-sm);
  padding: 1.6rem;

  .note-headings {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
