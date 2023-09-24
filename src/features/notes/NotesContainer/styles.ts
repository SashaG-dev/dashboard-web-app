import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const NotesContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  @media ${mediaQueries.tabPortrait} {
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
  }
`;
