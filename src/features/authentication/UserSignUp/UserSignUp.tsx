import {
  Link,
  Form,
  ActionFunction,
  useNavigation,
  redirect,
} from 'react-router-dom';
import { FormRowStyled } from '../../../components/Form';
import { TextInputStyled } from '../../../components/Input';
import { ButtonStyled } from '../../../components/Button';
import { errorToast } from '../../../utils/toasts';
import { createUser } from '../../../api/apiAuth';
import { apiAuth } from '../../../api/apiAuth';
import { successToast } from '../../../utils/toasts';
import { UserSignUpStyled } from './styles';

export const action: ActionFunction = async ({ request }): Promise<any> => {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const confirm = formData.get('confirm') as string;
    if (password !== confirm) errorToast('Passwords do not match.');
    else if (password.trim().length < 6)
      errorToast('Password must be at least 6 characters long.');
    else if (!username.trim().length || username.length < 6)
      errorToast('Username must be at least 6 characters long.');
    else if (username.trim().length > 10)
      errorToast("Username can't be more than 10 characters.");
    else if (username.trim() === 'demo.user')
      errorToast(
        'This username cannot be used. Please enter a different name.'
      );
    else {
      await createUser(email.trim(), password.trim(), username.trim());
      const user = apiAuth.currentUser;
      if (user !== null) {
        successToast('New account created!');
        return redirect('/');
      }
    }
  } catch (err) {
    console.error(err);
    errorToast('Something went wrong. Check your connection and try again.');
  }
  return null;
};

const UserSignUp = () => {
  const navigation = useNavigation();

  return (
    <UserSignUpStyled>
      <h1 className="signup-heading">Create an account</h1>

      <div className="signup-container">
        <Form replace method="post" className="signup-form">
          <FormRowStyled>
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <TextInputStyled
              placeholder="Email"
              name="email"
              id="email"
              type="email"
            />
          </FormRowStyled>

          <FormRowStyled>
            <label htmlFor="username" className="visually-hidden">
              Email
            </label>
            <TextInputStyled
              placeholder="Username"
              name="username"
              id="username"
              type="text"
            />
          </FormRowStyled>

          <FormRowStyled>
            <label htmlFor="password" className="visually-hidden">
              Password
            </label>
            <TextInputStyled
              placeholder="Password"
              name="password"
              id="password"
              type="password"
            />
          </FormRowStyled>

          <FormRowStyled>
            <label htmlFor="confirm" className="visually-hidden">
              Confirm Password
            </label>
            <TextInputStyled
              placeholder="Confirm password"
              name="confirm"
              id="confirm"
              type="password"
            />
          </FormRowStyled>

          <ButtonStyled
            $type="accent"
            disabled={navigation.state === 'submitting'}
          >
            {navigation.state === 'submitting'
              ? 'Creating account'
              : 'Create Account'}
          </ButtonStyled>
        </Form>
      </div>

      <small className="signup-small">
        Already have an account?{' '}
        <Link to="/login" title="Go to log in page">
          Log in now.
        </Link>
      </small>
    </UserSignUpStyled>
  );
};
export default UserSignUp;
