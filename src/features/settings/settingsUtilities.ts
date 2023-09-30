import { errorToast } from '../../utils/toasts';

export const checkError = (
  input: any,
  password: string,
  handler: () => void
) => {
  if (input.currentPassword !== password)
    errorToast('Current password does not match.');
  else if (input.newPassword.trim() === '')
    errorToast('Please enter a valid password.');
  else if (input.newPassword.trim().length < 6)
    errorToast('Password must be at least 6 characters long.');
  else if (input.newPassword !== input.confirmNew)
    errorToast('New password does not match confirm.');
  else if (input.newPassword === password)
    errorToast('Your new password cannot be the same as your previous.');
  else handler();
};
