import { takeEvery, put } from 'redux-saga/effects';
import { setApiKey } from '../slices/app';
import { addMessage, fetchChat } from '../slices/chat';
import toast from '../../lib/toast';

function* watchSetApiKey({ payload }) {
  yield localStorage.setItem('apiKey', payload);
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

function* saga() {
  yield takeEvery(setApiKey.toString(), watchSetApiKey);
  yield takeEvery(addMessage.toString(), watchChatMessage);
}

export default saga;
