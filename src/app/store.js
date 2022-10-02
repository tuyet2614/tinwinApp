import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import userReducer from '../redux/user/reducers';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export {store};
