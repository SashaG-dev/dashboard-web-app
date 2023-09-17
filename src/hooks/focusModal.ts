import {
  useEffect,
  useRef,
  KeyboardEvent,
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

      const handleKeyEvents = (e: KeyboardEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        if (
          e.key === 'Escape' ||
          (target.classList.contains('modal-close') && e.key === 'Enter')
        ) {
          setToggleModal(false);
        }

        if (target.classList.contains('modal-dispatch') && e.key === 'Enter') {
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
