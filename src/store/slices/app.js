import { createSlice } from '@reduxjs/toolkit';

const apiKey = localStorage.getItem('apiKey') || '';

const initialState = {
  apiKey,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApiKey: (state, { payload }) => ({ ...state, apiKey: payload }),
  },
});

export const { setApiKey } = appSlice.actions;

export default appSlice.reducer;
