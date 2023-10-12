import { styled } from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  border-bottom: 1px solid var(--tertiary-opacity);
  margin-bottom: 2.4rem;
  padding-bottom: 1.6rem;

  @media ${mediaQueries.tabSmall} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .header-heading {
    font-size: 2.7rem;
    font-weight: 300;
    letter-spacing: -1px;

    @media ${mediaQueries.phonePortrait} {
      font-size: 2.4rem;
    }
  }

  .header-details {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media ${mediaQueries.phoneLandscape} {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.8rem;
    }
  }
`;
