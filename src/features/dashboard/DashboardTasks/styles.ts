import { styled } from 'styled-components';

export const DashboardTasksStyled = styled.div`
  .tasks-container {
    max-width: 48rem;
    min-height: 28rem;
    background-color: var(--secondary);
    border-radius: var(--radius-md);
    position: relative;

    .card {
      position: absolute;
      top: 2rem;
      left: 1.6rem;
      transition: transform 0.3s;

      &:first-of-type {
        top: 10rem;
        left: 10rem;
        z-index: 1;
      }

      &:hover {
        z-index: 2;
        transform: translateY(-5px) scale(1.02);
      }
    }
  }
`;
