import { takeEvery, put } from 'redux-saga/effects';
import { setApiKey } from '../slices/app';
import {
  addMessage, clearMessages, fetchChat, selectPrompt,
} from '../slices/chat';
import toast from '../../lib/toast';

function* watchSetApiKey({ payload }) {
  localStorage.setItem('apiKey', payload);
  yield toast({
    title: 'OK',
    description: 'Your api key successfully saved.',
    status: 'success',
    isClosable: true,
  });
}

function* watchChatMessage() {
  yield put(fetchChat());
}

function* watchSelectPrompt({ payload }) {
  localStorage.setItem('selectedPrompt', JSON.stringify(payload));
  yield put(clearMessages());
}

function* saga() {
  yield takeEvery(setApiKey.toString(), watchSetApiKey);
  yield takeEvery(addMessage.toString(), watchChatMessage);
  yield takeEvery(selectPrompt.toString(), watchSelectPrompt);
}

export default saga;
