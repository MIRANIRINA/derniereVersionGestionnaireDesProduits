
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  utilisateurs: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.utilisateurs = action.payload.utilisateurs;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.utilisateurs = null;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
