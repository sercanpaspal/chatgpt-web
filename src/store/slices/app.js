import { createSlice } from '@reduxjs/toolkit';
import { SCREENS } from '../../constants';

const apiKey = localStorage.getItem('apiKey') || '';

const initialState = {
  apiKey,
  activeScreen: apiKey ? SCREENS.HOME : SCREENS.API_KEY,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setApiKey: (state, { payload }) => ({ ...state, apiKey: payload }),
    setActiveScreen: (state, { payload }) => ({ ...state, activeScreen: payload }),
  },
});

export const { setApiKey, setActiveScreen } = appSlice.actions;

export default appSlice.reducer;
