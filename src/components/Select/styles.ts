import { styled } from 'styled-components';

export const SelectStyled = styled.select`
  color: var(--tertiary);
  background-color: var(--secondary);
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 2px;

  &::-webkit-scrollbar {
    width: 0;
    opacity: 0;
  }
`;
