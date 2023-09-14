import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const FocusEditingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
  min-height: 50vh;

  .focus-display {
    font-size: 4.2rem;
  }

  .edit-container {
    display: flex;
    gap: 2.4rem;

    @media ${mediaQueries.phoneLandscape} {
      flex-direction: column;
    }
  }

  .edit-buttons {
    margin-top: 0.8rem;
    gap: 1.6rem;
  }

  button {
    font-size: 1.8rem;
  }
`;
