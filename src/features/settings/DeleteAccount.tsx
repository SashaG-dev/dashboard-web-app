import { ButtonStyled } from '../../components/Button';

type Props = {
  onClick: () => void;
};

const DeleteAccount = ({ onClick }: Props) => {
  return (
    <div className="delete-container">
      <ButtonStyled $type="warning" onClick={onClick}>
        Delete Account
      </ButtonStyled>
    </div>
  );
};
export default DeleteAccount;
