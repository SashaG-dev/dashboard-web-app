import { styled } from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--tertiary-opacity);
  margin-bottom: 2.4rem;
  padding-bottom: 1.6rem;

  @media ${mediaQueries.tabSmall} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .header-heading {
    font-size: 3.2rem;
    font-weight: 300;

    @media ${mediaQueries.tabSmall} {
      font-size: 2.8rem;
    }
    @media ${mediaQueries.phonePortrait} {
      font-size: 2.4rem;
    }
  }

  .header-details {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    @media ${mediaQueries.phoneLandscape} {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.8rem;
    }
  }
`;
