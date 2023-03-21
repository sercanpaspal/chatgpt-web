import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchChatApi } from '../../lib/api';

const initialState = {
  messages: [],
  isLoading: false,
  errorMessage: '',
  isConversationEnabled: false,
};

export const fetchChat = createAsyncThunk(
  'chat/fetchChat',
  async (prompt, { rejectWithValue, getState }) => {
    const { app: { apiKey }, chat: { messages: _messages } } = getState();

    const messages = [
      // { role: 'system', content: 'given role' },
      ..._messages,
    ];

    try {
      return await fetchChatApi({ apiKey, messages });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, { payload }) => ({ ...state, messages: [...(state.isConversationEnabled ? state.messages : []), { role: 'user', content: payload }] }),
    setIsConversationEnabled: (state, { payload }) => ({ ...state, isConversationEnabled: payload }),
  },
  extraReducers: {
    [fetchChat.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchChat.fulfilled]: (state, { payload }) => ({ ...state, isLoading: false, messages: [...state.messages, { role: 'assistant', content: payload }] }),
    [fetchChat.rejected]: (state, { payload }) => ({ ...state, isLoading: false, errorMessage: payload }),
  },
});

export const { addMessage, setIsConversationEnabled } = chatSlice.actions;

export default chatSlice.reducer;
