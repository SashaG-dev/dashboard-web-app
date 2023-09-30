import { Dispatch, SetStateAction } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';

type Props = {
  setToggleModal: Dispatch<SetStateAction<boolean>>;
};

const UserMenuLogout = ({ setToggleModal }: Props) => {
  return (
    <div className="settings-container">
      <button
        type="button"
        title="Logout"
        onClick={() => setToggleModal(true)}
        aria-label="Log out"
      >
        <BsBoxArrowRight aria-hidden="true" />
        <span>Logout</span>
      </button>
    </div>
  );
};
export default UserMenuLogout;
