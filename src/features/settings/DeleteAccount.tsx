import { Form, useNavigation } from 'react-router-dom';
import { FormRowStyled } from '../../components/Form';
import { TextInputStyled } from '../../components/Input';
import { ButtonStyled, ButtonGroupStyled } from '../../components/Button';

type Props = {
  close: () => void;
};

const DeleteAccount = ({ close }: Props) => {
  const navigation = useNavigation();

  return (
    <div>
      <div className="headings-container">
        <h2>Are you sure you want to go?</h2>
        <p className="text-light">Fill out this form to confirm.</p>
      </div>

      <Form replace method="post" className="delete-form">
        <FormRowStyled className="delete-row">
          <label htmlFor="deleteEmail" className="visually-hidden">
            Email
          </label>
          <TextInputStyled
            id="deleteEmail"
            name="deleteEmail"
            placeholder="Email"
          />
        </FormRowStyled>

        <FormRowStyled className="delete-row">
          <label htmlFor="deletePassword" className="visually-hidden">
            Password
          </label>
          <TextInputStyled
            id="deletePassword"
            name="deletePassword"
            placeholder="Password"
            type="password"
          />
        </FormRowStyled>

        <FormRowStyled className="delete-row">
          <label htmlFor="confirmDelete" className="visually-hidden">
            Confirm Password
          </label>
          <TextInputStyled
            id="confirmDelete"
            name="confirmDelete"
            placeholder="Confirm Password"
            type="password"
          />
        </FormRowStyled>

        <ButtonGroupStyled>
          <ButtonStyled
            $type="accent"
            type="submit"
            disabled={navigation.state === 'submitting'}
          >
            {navigation.state === 'submitting' ? 'Loading...' : 'Confirm'}
          </ButtonStyled>

          <ButtonStyled $type="secondary" type="button" onClick={close}>
            Cancel
          </ButtonStyled>
        </ButtonGroupStyled>
      </Form>
    </div>
  );
};
export default DeleteAccount;
