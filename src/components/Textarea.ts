import { styled } from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';

export const TextareaStyled = styled.textarea`
  font-size: inherit;
  line-height: 1.2;
  resize: none;
  width: 100%;
  height: 16rem;
  border-radius: var(--radius-sm);
  padding: 0.8rem 1.6rem;

  @media ${mediaQueries.phoneSmall} {
    font-size: 1.6rem;
  }
`;
