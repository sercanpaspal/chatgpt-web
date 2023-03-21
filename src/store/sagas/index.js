import { takeEvery, put } from 'redux-saga/effects';
import { setApiKey } from '../slices/app';
import { addMessage, fetchChat } from '../slices/chat';

function* watchSetApiKey({ payload }) {
  yield localStorage.setItem('apiKey', payload);
}

function* watchChatMessage({ payload }) {
  yield put(fetchChat(payload));
}

function* saga() {
  yield takeEvery(setApiKey.toString(), watchSetApiKey);
  yield takeEvery(addMessage.toString(), watchChatMessage);
}

export default saga;
