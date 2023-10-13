import { styled } from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const NotesContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(48rem, 1fr));
  column-gap: 1.6rem;
  row-gap: 3.2rem;
  padding-bottom: 1.6rem;

  @media ${mediaQueries.laptop} {
    grid-template-columns: repeat(2, minmax(42rem, 1fr));
  }
  @media ${mediaQueries.tabLandscape} {
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  }
`;
