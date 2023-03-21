import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import slices from './slices';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: slices,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(sagas);
