import { FormRowStyled } from '../../components/Form';
import { LabelTop } from '../../components/Label';
import { TextInputStyled } from '../../components/Input';
import { ButtonStyled, ButtonGroupStyled } from '../../components/Button';

type Props = {
  onClick: (name: 'email' | 'password') => void;
};

const UpdatePassword = ({ onClick }: Props) => {
  return (
    <form className="settings-form">
      <h3 className="settings-h3">Update Password</h3>

      <div className="form-container">
        <FormRowStyled>
          <LabelTop
            label="Current password:"
            htmlFor="current-password"
            isColumn={true}
          >
            <TextInputStyled id="current-password" name="current-password" />
          </LabelTop>
        </FormRowStyled>

        <FormRowStyled>
          <LabelTop
            label="New password:"
            htmlFor="new-password"
            isColumn={true}
          >
            <TextInputStyled id="new-password" name="new-password" />
          </LabelTop>
        </FormRowStyled>

        <FormRowStyled>
          <LabelTop
            label="Confirm new password:"
            htmlFor="confirm-new"
            isColumn={true}
          >
            <TextInputStyled id="confirm-new" name="confirm-new" />
          </LabelTop>
        </FormRowStyled>
      </div>

      <ButtonGroupStyled>
        <ButtonGroupStyled>
          <ButtonStyled $type="accent">Confirm</ButtonStyled>

          <ButtonStyled
            $type="secondary"
            type="button"
            onClick={() => onClick('password')}
          >
            Cancel
          </ButtonStyled>
        </ButtonGroupStyled>
      </ButtonGroupStyled>
    </form>
  );
};
export default UpdatePassword;
