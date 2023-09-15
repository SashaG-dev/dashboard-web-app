import styled from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const FocusingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  .focus-name {
    font-size: 4.8rem;

    @media ${mediaQueries.phoneLandscape} {
      font-size: 3.6rem;
    }
    @media ${mediaQueries.phonePortrait} {
      font-size: 2.8rem;
    }
  }

  .time {
    font-size: 4.8rem;

    @media ${mediaQueries.phoneLandscape} {
      font-size: 3.6rem;
    }
    @media ${mediaQueries.phonePortrait} {
      font-size: 2.8rem;
    }
  }

  .btn-group {
    gap: 1.6rem;
  }
`;
