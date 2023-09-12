import { styled } from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const CardStyled = styled.article<{ $current?: boolean }>`
  width: 75%;
  min-height: 15rem;
  max-height: 17rem;
  background-color: var(
    ${(props) => (props.$current ? '--accent' : '--tertiary')}
  );
  border-radius: var(--radius-sm);
  overflow: hidden;
  position: relative;

  @media ${mediaQueries.phoneLandscape} {
    max-width: 36rem;
    width: 90%;
  }

  .card-main {
    color: var(--primary);
    padding: 2.4rem 1.6rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 70%;
      background-image: linear-gradient(
        to top,
        var(${(props) => (props.$current ? '--accent' : '--tertiary')}) 25%,
        transparent 75%
      );
    }
  }

  .tasks-details {
    display: flex;
    justify-content: space-between;

    @media ${mediaQueries.phoneLandscape} {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    &:link,
    &:visited {
      color: var(--secondary);
      font-size: 3.6rem;
      position: absolute;
      bottom: 0.8rem;
      right: 0.8rem;
      transform: rotate(-45deg);
    }

    &:hover,
    &:focus-visible,
    &:active {
      color: var(--primary);
      outline: none;
      transform: rotate(0);
    }
  }
`;
