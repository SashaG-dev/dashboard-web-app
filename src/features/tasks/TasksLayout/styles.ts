import { styled } from 'styled-components';

export const TasksLayoutStyled = styled.div`
  .tasks-layout--headings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--tertiary-opacity);
    margin-bottom: 2.4rem;
    padding: 0.8rem;
  }

  .cards-container {
    display: flex;
    gap: 1.6rem;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 0;
      opacity: 0;
    }
  }
`;
