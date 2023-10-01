import { useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';
import { FormRowStyled } from '../components/Form';
import { TextInputStyled } from '../components/Input';
import { ButtonStyled } from '../components/Button';
import { resetUserPassword } from '../store/slices/userSlice';
import { useAppDispatch } from '../hooks/hooks';
import { errorToast, successToast } from '../utils/toasts';

const ForgotPasswordStyled = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;

  .container {
    background-color: var(--secondary);
    padding: 2.4rem;
    width: 100%;
    max-width: 48rem;
    border-radius: var(--radius-sm);

    @media ${mediaQueries.phonePortrait} {
      background-color: transparent;
      padding: 0.8rem;
    }
  }

  .password-headings,
  .form-row {
    margin-bottom: 1.6rem;
  }

  h1,
  p {
    line-height: 1;
  }

  span {
    @media ${mediaQueries.phonePortrait} {
      display: block;
    }
  }

  h1 {
    margin-bottom: 0.8rem;

    @media ${mediaQueries.phoneLandscape} {
      font-size: 2.6rem;
    }
  }

  input,
  button {
    width: 100%;
  }

  a {
    &:link,
    &:visited {
      color: var(--accent);
      text-decoration: none;
    }
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;

const ForgotPassword = () => {
  const [input, setInput] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onClick = () => {
    if (!input.includes('@') || input.trim() === '')
      errorToast('Please enter a valid email address.');
    else {
      dispatch(resetUserPassword({ email: input }));
      navigate('/login', { replace: true });
      successToast('Email sent!');
    }
  };

  return (
    <ForgotPasswordStyled className="login-main">
      <div className="container">
        <div className="password-headings">
          <h1 className="text-center">
            Forgot your password? <span>No worries.</span>
          </h1>
          <p className="text-light text-center">
            Enter your email and we'll send a link so you can reset it.
          </p>
        </div>

        <FormRowStyled className="form-row">
          <label htmlFor="email" className="visually-hidden">
            Email
          </label>
          <TextInputStyled
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={input}
            onChange={(e) => onChange(e)}
          />
        </FormRowStyled>

        <ButtonStyled $type="accent" onClick={onClick}>
          Send
        </ButtonStyled>
      </div>

      <Link to="../">Back to Login</Link>
    </ForgotPasswordStyled>
  );
};
export default ForgotPassword;
