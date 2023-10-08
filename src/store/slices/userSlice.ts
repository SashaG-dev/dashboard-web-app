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
} from '../../api/apiSettings';
import { unsubscribeFn } from '../../utils/helpers';

type UserStateType = {
  userData: UserType;
  unsubscribe: null | Unsubscribe;
};

const initialState: UserStateType = {
  userData: {
    id: null,
    email: null,
    password: null,
    displayName: null,
    photoURL: null,
    tag: {
      hasTag: false,
      customTag: null,
    },
    color: 'purple',
    darkMode: true,
  },
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
  updateCurrentName,
  updateCurrentEmail,
  updateCurrentPassword,
  resetUserPassword,
} = userSlice.actions;

export default userSlice.reducer;
