import { useEffect } from 'react';
import {
  useNavigation,
  Form,
  ActionFunction,
  redirect,
  Link,
  useNavigate,
} from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa6';
import { FormRowStyled } from '../../../components/Form';
import { TextInputStyled } from '../../../components/Input';
import { ButtonStyled } from '../../../components/Button';
import { signInUser } from '../../../api/apiAuth';
import { errorToast, successToast } from '../../../utils/toasts';
import { UserLoginStyled } from './styles';
import { apiAuth } from '../../../api/apiAuth';

export const loginAction: ActionFunction = async ({
  request,
}): Promise<any> => {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    await signInUser(email, password);
    const user = apiAuth.currentUser as any;
    localStorage.setItem('token', user?.accessToken);
    if (user) {
      successToast('Welcome back!');
      return redirect('/');
    }
  } catch (err) {
    console.error(err);
    errorToast('Something went wrong. Check your connection and try again.');
  }
  return null;
};

const UserLogin = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();

  useEffect(() => {
    const email = import.meta.env.VITE_DEMO_EMAIL;
    const password = import.meta.env.VITE_DEMO_PASSWORD;

    const demoBtn = document.querySelector('.demo-btn') as HTMLButtonElement;

    const loginDemo = async () => {
      try {
        await signInUser(email, password);
        const user = apiAuth.currentUser as any;
        if (user) {
          sessionStorage.setItem('token', user.accessToken);
          successToast('Now in demo mode.');
          navigate('/');
        }
      } catch (err) {
        console.error(err);
      }
    };

    demoBtn.addEventListener('click', loginDemo);

    return () => {
      demoBtn.removeEventListener('click', loginDemo);
    };
  });

  return (
    <UserLoginStyled>
      <Form replace className="login-form" method="post">
        <FormRowStyled>
          <label htmlFor="email" className="visually-hidden">
            Email Address
          </label>
          <div className="row-container">
            <BsPersonCircle aria-hidden="true" />
            <TextInputStyled placeholder="Email" name="email" id="email" />
          </div>
        </FormRowStyled>

        <FormRowStyled>
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <div className="row-container">
            <FaLock aria-hidden="true" />
            <TextInputStyled
              placeholder="Password"
              name="password"
              id="password"
              type="password"
            />
          </div>
        </FormRowStyled>

        <FormRowStyled className="flex-column">
          <ButtonStyled
            $type="accent"
            className="login-btn"
            disabled={navigation.state === 'submitting'}
          >
            {navigation.state === 'submitting' ? 'Logging in' : 'Log in'}
          </ButtonStyled>

          <ButtonStyled
            $type="accent"
            title="Log in with a demo account"
            className="demo-btn"
            type="button"
          >
            Try the Demo
          </ButtonStyled>

          <Link to="forgot-password">Forgot Password?</Link>
        </FormRowStyled>
      </Form>
    </UserLoginStyled>
  );
};
export default UserLogin;
