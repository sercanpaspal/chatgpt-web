import { createSelector } from 'reselect';

const getApp = (state) => state.app;

const getApiKey = createSelector(getApp, (app) => app.apiKey);
const getActiveScreen = createSelector(getApp, (app) => app.activeScreen);

const getChat = (state) => state.chat;
const getChatMessages = createSelector(getChat, (chat) => chat.messages);
const getChatError = createSelector(getChat, (chat) => chat.error);

export default {
  getApiKey,
  getActiveScreen,
  getChatMessages,
  getChatError,
};
