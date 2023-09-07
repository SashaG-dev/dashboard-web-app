import { styled } from 'styled-components';

export const DashboardHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;

  .header-heading {
    font-size: 3.2rem;
    font-weight: 300;
  }

  .header-details {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;
