import { useEffect } from 'react';
import { forwardRef, ReactNode } from 'react';
import { ButtonGroupStyled, ButtonStyled } from '../Button';
import { ModalStyled } from './styles';

type ModalPropsType = {
  role: string;
  heading: string;
  subheading?: string;
  btnText: string;
  onClick: () => void;
  close: () => void;
  children?: ReactNode | undefined;
};

const Modal = forwardRef(function Modal(props: ModalPropsType, ref?: any) {
  const { role, heading, subheading, btnText, onClick, close, children } =
    props;

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <ModalStyled role={role} ref={ref ? ref : undefined}>
        <div className="modal-headings">
          <h1 className="modal-heading">{heading}</h1>
          {subheading && <p className="modal-subheading">{subheading}</p>}
        </div>
        {children}
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
