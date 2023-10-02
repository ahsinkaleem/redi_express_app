import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

// Type for our state
export interface UserState {
  accessToken: string;
  data: any;
  authModal: boolean;
}

// Initial state
const initialState: UserState = {
  accessToken: '',
  data: {},
  authModal: false,
};

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.accessToken = action.payload;
    },
    setLogout(state) {
      state.accessToken = '';
      state.data = {};
    },
    setShowAuthModal(state) {
      state.authModal = true;
    },
    setHideAuthModal(state) {
      state.authModal = false;
    },
  },
});

export const { setAuthState, setLogout, setHideAuthModal, setShowAuthModal } =
  userSlice.actions;

export const selectUserState = (state: RootState) => state.user;

export const selectUserAuthModal = (state: RootState) => state.user.authModal;

export default userSlice.reducer;
