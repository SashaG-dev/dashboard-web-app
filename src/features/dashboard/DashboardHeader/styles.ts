import { styled } from 'styled-components';

export const DashboardHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--tertiary-opacity);
  margin-bottom: 2.4rem;
  padding-bottom: 1.6rem;

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
