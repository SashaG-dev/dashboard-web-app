import { createSlice, createAsyncThunk, Unsubscribe } from '@reduxjs/toolkit';
import { onSnapshot, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../../api/firebase';
import { apiAuth, resetPassword } from '../../api/apiAuth';
import { UserType } from '../../types/UserType';
import { RootState } from '../store';
import {
  toggleMode,
  updateName,
  updateUserEmail,
  updateUserPassword,
  updateTheme,
  updateAvatar,
} from '../../api/apiSettings';
import { unsubscribeFn } from '../../utils/helpers';

type UserStateType = {
  userData: UserType;
  unsubscribe: null | Unsubscribe;
};

const defaultUser: UserType = {
  id: null,
  email: null,
  password: null,
  displayName: null,
  name: null,
  photoURL: null,
  color: 'purple',
  darkMode: true,
};

const initialState: UserStateType = {
  userData: defaultUser,
  unsubscribe: null,
};

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { getState, dispatch }) => {
    try {
      onAuthStateChanged(apiAuth, (user) => {
        if (user !== null) {
          const userRef = doc(db, 'users', user!.uid);
          const unsubscribe = onSnapshot(userRef, (doc) => {
            const data = doc.data();
            if (data) {
              dispatch(userSlice.actions.setUserData(data.details));
            }
            if (!user) {
              (getState() as RootState).user.unsubscribe = unsubscribe;
            }
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
);

export const unsubscribe = unsubscribeFn('user/unsubscribe', 'user');

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    toggleUserMode: (state) => {
      toggleMode(!state.userData.darkMode);
    },
    updateUserTheme: (state, action) => {
      const { newColor } = action.payload;
      if (newColor === state.userData.color) return;
      else updateTheme(newColor);
    },
    updateUserAvatar: (state, action) => {
      const { avatar } = action.payload;
      if (state.userData.photoURL === avatar) return;
      else updateAvatar(avatar);
    },
    updateCurrentName: (_, action) => {
      const { newName } = action.payload;
      updateName(newName);
    },
    updateCurrentEmail: (_, action) => {
      const { newEmail } = action.payload;
      updateUserEmail(newEmail);
    },
    updateCurrentPassword: (_, action) => {
      const { newPassword } = action.payload;
      updateUserPassword(newPassword);
    },
    resetUserPassword: (_, action) => {
      const { email } = action.payload;
      resetPassword(email);
    },
    clearUserData: (state) => {
      state.userData = defaultUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(unsubscribe.fulfilled, (state) => {
      state.unsubscribe = null;
    });
  },
});

export const {
  toggleUserMode,
  updateUserTheme,
  updateUserAvatar,
  updateCurrentName,
  updateCurrentEmail,
  updateCurrentPassword,
  resetUserPassword,
  clearUserData,
} = userSlice.actions;

export default userSlice.reducer;
