import { createSelector } from 'reselect';

const getApp = (state) => state.app;

const getApiKey = createSelector(getApp, (app) => app.apiKey);
const getActiveScreen = createSelector(getApp, (app) => app.activeScreen);

const getChat = (state) => state.chat;
const getChatMessages = createSelector(getChat, (chat) => chat.messages);
const getChatErrorMessage = createSelector(getChat, (chat) => chat.errorMessage);
const getChatIsLoading = createSelector(getChat, (chat) => chat.isLoading);
const getIsConversationEnabled = createSelector(getChat, (chat) => chat.isConversationEnabled);
const getSelectedPrompt = createSelector(getChat, (chat) => chat.selectedPrompt);

export default {
  getApiKey,
  getActiveScreen,
  getChatMessages,
  getChatErrorMessage,
  getChatIsLoading,
  getIsConversationEnabled,
  getSelectedPrompt,
};
