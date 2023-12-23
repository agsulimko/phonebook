import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  refreshThunk,
  registrationThunk,
  logoutThunk,
} from './auchOperations';

const initialState = {
  token: '',
  user: null,
  // isLoggedIn: false,
  // isRefreshing: false,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  // state.isLoggedIn = true;
  state.user = payload.user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {
  // loginOut: state => {
  //   state.token = '';
  //   state.error = null;
  //   state.isLoading = false;
  // },
  // },
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logoutThunk.fulfilled, state => {
        state.token = '';
        state.error = null;
        state.isLoading = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        // state.user = payload;
        // state.isLoggedIn = true;
        // state.isRefreshing = false;
      });
    // .addCase(refreshThunk.fulfilled, (state, { payload }) => {
    //   state.user = payload;
    // });
  },
});

export const authReducer = authSlice.reducer;

// export const { loginOut } = authSlice.actions;
