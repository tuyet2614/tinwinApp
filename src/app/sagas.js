import {all, fork} from 'redux-saga/effects';
import UserSaga from '../redux/user/sagas';

export default function* rootSaga() {
  yield all([fork(UserSaga)]);
}
