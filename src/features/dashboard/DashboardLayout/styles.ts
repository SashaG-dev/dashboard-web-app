import { styled } from 'styled-components';

export const DashboardLayoutStyled = styled.div<{ $isOpen?: boolean }>`
  .dashboard-container {
    max-width: 110rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(48rem, 1fr));
    justify-content: center;
    column-gap: 2.4rem;
    row-gap: 3.2rem;
    padding-bottom: 1.6rem;
  }
`;
