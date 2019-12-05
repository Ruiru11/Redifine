import {all, fork} from 'redux-saga/effects';

import {watchLogin} from './auth/login';
import {watchSignup} from './auth/signup';

export default function* root() {
  yield all([fork(watchLogin), fork(watchSignup)]);
}
