import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const DashboardNoteStyled = styled.div<{ $isOpen: boolean }>`
  margin: 0 auto;

  .note-container {
    color: var(--primary);
    background-color: var(--accent);
    padding: 1.6rem 2.4rem;
    border-radius: var(--radius-sm);
    width: ${(props) => (props.$isOpen ? '32rem' : '36rem')};
    height: 28rem;
    overflow: hidden;
    position: relative;

    @media ${mediaQueries.phoneLandscape} {
      width: 32rem;
    }
    @media ${mediaQueries.phonePortrait} {
      width: 26rem;
    }
  }

  .note-headings {
    display: flex;
    justify-content: space-between;
    flex-direction: ${(props) => (props.$isOpen ? 'column' : 'row')};
    margin-bottom: 0.8rem;
  }

  .note-main {
    overflow-wrap: break-word;
    inline-size: 90%;
    line-height: 1.2;
  }

  button {
    color: var(--secondary);
    font-size: 3.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-45deg);
    position: absolute;
    bottom: 0.8rem;
    right: 0.8rem;
    padding: 0.2rem;

    &:hover,
    &:focus-visible {
      color: var(--primary);
      outline: none;
      transform: rotate(0);
    }
  }
`;
