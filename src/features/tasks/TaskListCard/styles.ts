import { styled, css } from 'styled-components';
import { StyledVariations } from '../../../types/utilTypes';

const variations: StyledVariations = {
  current: css`
    color: var(--primary);
    background-color: var(--accent);
    border: 1px solid var(--accent);
  `,
};

export const TaskListCardStyled = styled.div<{ $current?: string }>`
  color: var(--tertiary);
  flex: 0 0 auto;
  background-color: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: var(--radius-md);
  width: 32rem;
  height: 80vh;
  padding: 2.4rem 1.6rem;
  overflow: hidden;
  position: relative;

  .card-headings {
    margin-bottom: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .list-wrapper {
    height: calc(80% - 1.6rem);
    overflow-x: auto;
    overflow-y: scroll;
    padding: 0.4rem;

    &::-webkit-scrollbar {
      width: 0;
      opacity: 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;

      li {
        display: inline-block;
        width: 100%;
      }

      li small {
        color: var(--tertiary);
        background-color: var(--primary);
        border-radius: var(--radius-sm);
        padding: 0.4rem 0.8rem;

        &.red {
          color: var(--error);
        }
      }

      li .edit-span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;
      }
    }
  }

  .status-container {
    color: var(--tertiary);
    background-color: var(--primary);
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    display: flex;
    align-items: center;
    height: 4.4rem;
    padding: 0.8rem 1.6rem;
    border-radius: var(--radius-sm) 0 0 0;
  }

  ${(props) => (props.$current ? variations[props.$current] : '')};
`;
