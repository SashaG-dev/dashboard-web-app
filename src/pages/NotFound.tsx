import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';
import { ButtonStyled } from '../components/Button';

const NotFoundStyled = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  padding: 1.6rem 2.4rem;

  .error-headings {
    max-width: 72rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    @media ${mediaQueries.tabSmall} {
      flex-direction: column;
      gap: 0.8rem;
      text-align: center;
    }
  }

  .error-heading {
    font-size: 16.4rem;
    text-align: center;

    @media ${mediaQueries.phoneLandscape} {
      font-size: 12.8rem;
    }
    @media ${mediaQueries.phonePortrait} {
      font-size: 9.6rem;
    }
  }

  .error-subheading {
    @media ${mediaQueries.phoneLandscape} {
      font-size: 2.2rem;
      margin-bottom: 0.8rem;
    }
  }

  h1,
  h2 {
    line-height: 1;
  }

  button {
    font-size: 2rem;
    max-width: 64rem;
    width: 75%;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundStyled className="login-main">
      <div className="error-headings">
        <h1 className="error-heading text-accent">404</h1>
        <div>
          <h2 className="error-subheading">Something went wrong.</h2>
          <p className="text-light">
            Oops! The page you're looking for could not be found or doesn't
            exist.
          </p>
        </div>
      </div>

      <ButtonStyled
        $type="accent"
        onClick={() => navigate('../', { relative: 'path' })}
      >
        <BsArrowLeft aria-hidden="true" />
        Go Back
      </ButtonStyled>
    </NotFoundStyled>
  );
};
export default NotFound;
