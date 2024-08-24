import { configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import createSagaMiddleware from 'redux-saga'
import {sagaSlice} from '../features/counter/sagaSlice.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(sagaSlice);
export default store;