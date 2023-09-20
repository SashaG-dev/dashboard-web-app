import {
  useEffect,
  useRef,
  KeyboardEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from 'react';

type Props = {
  toggleModal: boolean;
  setToggleModal: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
};

export const focusModal = ({ toggleModal, setToggleModal, onClick }: Props) => {
  const modalRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const handleModal = () => {
      const focusElements = modal!.querySelectorAll('.modal-btn');
      const firstElement = focusElements[0] as HTMLButtonElement;
      const lastElement = focusElements[
        focusElements.length - 1
      ] as HTMLButtonElement;

      firstElement.focus();

      const handleTab = (e: KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (e.key === 'Tab') {
          if (!e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
          } else if (e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
          }
        }
      };

      const handleKeyEvents = (
        e: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement>
      ) => {
        const buttonTarget = e.target as HTMLButtonElement;
        const keyboardEvent = e as KeyboardEvent;

        if (
          keyboardEvent.key === 'Escape' ||
          (buttonTarget.classList.contains('modal-close') &&
            keyboardEvent.key === 'Enter')
        ) {
          setToggleModal(false);
        }

        if (
          buttonTarget.classList.contains('modal-dispatch') &&
          keyboardEvent.key === 'Enter'
        ) {
          onClick();
        }
      };

      modal?.addEventListener('keydown', (e: any) => {
        handleTab(e);
        handleKeyEvents(e);
      });

      return () => {
        modal?.removeEventListener('keydown', (e: any) => {
          handleTab(e);
          handleKeyEvents(e);
        });
      };
    };

    if (toggleModal) {
      handleModal();
    }
  }, [toggleModal]);

  return { modalRef };
};
