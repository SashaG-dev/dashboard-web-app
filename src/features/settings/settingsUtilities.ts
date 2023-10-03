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

export const checkEmailError = (
  input: any,
  email: string,
  password: string,
  handler: () => void
) => {
  if (input.newEmail.trim() === '' || !input.newEmail.includes('@'))
    errorToast('Please enter a valid email address.');
  else if (input.password.trim() === '')
    errorToast('Please enter your password and confirm change.');
  else if (input.password !== password) errorToast('Incorrect password.');
  else if (input.newEmail === email)
    errorToast('New email address cannot be current address.');
  else handler();
};

export const checkDeleteError = (data: any) => {
  const { inputEmail, inputPassword, inputConfirm, email, password, handler } =
    data;

  if (
    !inputEmail.trim().length ||
    !inputPassword.trim().length ||
    !inputConfirm.trim().length
  ) {
    errorToast('Please enter valid data before submitting.');
    return;
  } else if (inputEmail !== email) {
    errorToast('Incorrect email.');
    return;
  } else if (inputConfirm !== inputPassword) {
    errorToast('Password and confirm password do not match.');
    return;
  } else if (inputPassword !== password) {
    errorToast('Incorrect password.');
    return;
  } else {
    handler(inputEmail, inputPassword);
    return { redirect: true };
  }
};
