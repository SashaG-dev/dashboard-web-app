import { FormRowStyled } from '../../components/Form';
import { LabelTop } from '../../components/Label';
import { TextInputStyled } from '../../components/Input';
import { ButtonStyled, ButtonGroupStyled } from '../../components/Button';

type Props = {
  onClick: (name: 'email' | 'password') => void;
};

const UpdateEmail = ({ onClick }: Props) => {
  return (
    <form className="settings-form">
      <h3 className="settings-h3">Update Email</h3>

      <div className="form-container">
        <FormRowStyled>
          <LabelTop label="New email:" htmlFor="new-email" isColumn={true}>
            <TextInputStyled id="new-email" name="new-email" />
          </LabelTop>
        </FormRowStyled>

        <FormRowStyled>
          <LabelTop label="Password:" htmlFor="password" isColumn={true}>
            <TextInputStyled id="password" name="password" />
          </LabelTop>
        </FormRowStyled>

        <FormRowStyled>
          <LabelTop
            label="Confirm password:"
            htmlFor="confirm-password"
            isColumn={true}
          >
            <TextInputStyled id="confirm-password" name="confirm-password" />
          </LabelTop>
        </FormRowStyled>
      </div>

      <ButtonGroupStyled>
        <ButtonGroupStyled>
          <ButtonStyled $type="accent">Confirm</ButtonStyled>

          <ButtonStyled
            $type="secondary"
            type="button"
            onClick={() => onClick('email')}
          >
            Cancel
          </ButtonStyled>
        </ButtonGroupStyled>
      </ButtonGroupStyled>
    </form>
  );
};
export default UpdateEmail;
