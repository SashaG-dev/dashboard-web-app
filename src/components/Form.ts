import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

export const FormRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${mediaQueries.tabSmall} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;
