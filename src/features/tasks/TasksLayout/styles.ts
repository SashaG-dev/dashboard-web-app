import { styled } from 'styled-components';

export const TasksLayoutStyled = styled.div`
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
