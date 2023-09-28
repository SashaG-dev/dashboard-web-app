import { createSlice, createAsyncThunk, Unsubscribe } from '@reduxjs/toolkit';
import { onSnapshot } from 'firebase/firestore';
import { userRef } from '../../api/apiAuth';
import { UserType } from '../../types/UserType';
import { RootState } from '../store';
import { toggleMode, updateName } from '../../api/apiSettings';

type UserStateType = {
  userData: UserType;
  unsubscribe: null | Unsubscribe;
};

const initialState: UserStateType = {
  userData: {
    id: null,
    username: null,
    email: null,
    password: null,
    displayedName: null,
    image: undefined,
    tag: {
      hasTag: false,
      currentTag: null,
    },
    color: 'purple',
    darkMode: true,
    isLoggedIn: true,
  },
  unsubscribe: null,
};

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { getState, dispatch }) => {
    try {
      const unsubscribe = onSnapshot(userRef, (doc) => {
        const data = doc.data();
        if (data) {
          dispatch(userSlice.actions.setUserData(data));
        }
      });
      // (getState() as RootState).user.unsubscribe = unsubscribe;
    } catch (err) {
      console.error(err);
    }
  }
);

export const unsubscribe = createAsyncThunk(
  'userSlice/unsubscribe',
  (_, { getState }) => {
    const { unsubscribe } = (getState() as RootState).user;
    if (unsubscribe) unsubscribe();
  }
);

const userSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    toggleUserMode: (state) => {
      toggleMode(!state.userData.darkMode);
    },
    updateCurrentName: (_, action) => {
      const { newName } = action.payload;
      updateName(newName);
    },
  },
});

export const { toggleUserMode, updateCurrentName } = userSlice.actions;

export default userSlice.reducer;
