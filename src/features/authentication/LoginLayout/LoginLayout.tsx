import { Link, useLoaderData } from 'react-router-dom';
import UserLogin from '../UserLogin/UserLogin';
import { LoginLayoutStyled } from './styles';

export const loader = ({ request }: any) => {
  const url = new URL(request.url);
  const message = url?.searchParams?.get('message');
  return message;
};

const LoginLayout = () => {
  const message = useLoaderData() as string;

  return (
    <LoginLayoutStyled>
      <div className="login-headings">
        <h1 className="login-heading">Log in to your account</h1>
        {message && <p className="login-subheading">{message}</p>}
      </div>

      <UserLogin />

      <small className="login-small">
        Don't have an account? <Link to="/sign-up">Create one now.</Link>
      </small>
    </LoginLayoutStyled>
  );
};
export default LoginLayout;
