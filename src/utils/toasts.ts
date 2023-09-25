import toast from 'react-hot-toast';
import { finishDayMessages } from '../data/taskMessages';

export const errorToast = (text: string) => {
  return toast.error(text, {
    className: 'toast',
  });
};

export const iconToast = (text: string, icon: string) => {
  return toast(text, {
    icon: icon,
    className: 'toast',
  });
};

export const successToast = (text: string) => {
  return toast.success(text, {
    className: 'toast',
  });
};

export const randomTaskToast = () => {
  const randomMessage =
    finishDayMessages[
      Math.trunc(Math.random() * (finishDayMessages.length - 1))
    ];

  return iconToast(randomMessage.text, randomMessage.icon);
};
