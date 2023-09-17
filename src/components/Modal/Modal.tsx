import { forwardRef } from 'react';
import { ButtonGroupStyled, ButtonStyled } from '../Button';
import { ModalStyled } from './styles';

type ModalPropsType = {
  role: string;
  heading: string;
  subheading?: string;
  btnText: string;
  onClick: () => void;
  close: () => void;
};

const Modal = forwardRef(function Modal(props: ModalPropsType, ref: any) {
  const { role, heading, subheading, btnText, onClick, close } = props;

  return (
    <>
      <div className="overlay"></div>
      <ModalStyled role={role} ref={ref}>
        <div className="modal-headings">
          <h1 className="modal-heading">{heading}</h1>
          {subheading && <p className="modal-subheading">{subheading}</p>}
        </div>

        <ButtonGroupStyled className="modal-btns">
          <ButtonStyled
            title={btnText}
            onClick={onClick}
            className="modal-btn modal-dispatch"
            $type="underline"
          >
            {btnText}
          </ButtonStyled>

          <ButtonStyled
            title="Cancel"
            onClick={close}
            className="modal-btn modal-close"
            $type="underline"
          >
            Cancel
          </ButtonStyled>
        </ButtonGroupStyled>
      </ModalStyled>
    </>
  );
});
export default Modal;
