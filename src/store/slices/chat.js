import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchChatApi } from '../../lib/api';

const initialState = {
  messages: [],
  isLoading: false,
  errorMessage: '',
};

export const fetchChat = createAsyncThunk(
  'chat/fetchChat',
  async (prompt, { rejectWithValue, getState }) => {
    const { app: { apiKey } } = getState();
    try {
      return await fetchChatApi({ apiKey, prompt });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, { payload }) => ({ ...state, messages: [{ role: 'user', content: payload }] }),
  },
  extraReducers: {
    [fetchChat.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchChat.fulfilled]: (state, { payload }) => ({ ...state, isLoading: false, messages: [...state.messages, { role: 'assistant', content: payload }] }),
    [fetchChat.rejected]: (state, { payload }) => ({ ...state, isLoading: false, errorMessage: payload }),
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
