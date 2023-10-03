import { ActionFunction, redirect } from 'react-router-dom';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { apiAuth, deleteUserAccount } from '../../api/apiAuth';
import { checkDeleteError } from './settingsUtilities';
import store from '../../store/store';

const handler = async (email: string, password: string) => {
  try {
    const user = apiAuth.currentUser as any;
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(user, credential);
    await deleteUserAccount();
  } catch (err) {
    console.error(err);
  }
};

export const settingsAction: ActionFunction = async ({
  request,
}): Promise<any> => {
  const user = apiAuth.currentUser;
  const { password } = store.getState().user.userData;
  try {
    const formData = await request.formData();
    const inputEmail = formData.get('deleteEmail') as string;
    const inputPassword = formData.get('deletePassword') as string;
    const inputConfirm = formData.get('confirmDelete') as string;
    const data = {
      inputEmail,
      inputPassword,
      inputConfirm,
      email: user?.email,
      password,
      handler,
    };
    const action = checkDeleteError(data);
    if (action?.redirect) {
      localStorage.clear();
      return redirect('/login');
    }
  } catch (err) {
    console.error(err);
  }
  return null;
};
