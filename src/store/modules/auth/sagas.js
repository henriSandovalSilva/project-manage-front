import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';

import { doLoginSuccess } from './actions';

import history from '../../../services/history';

export function* doLogin({ email, password }) {
  try {
    const response = yield call(api.post, 'auth', {
      email,
      password,
    });

    const { token, user } = response.data;

    user.token = token;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(doLoginSuccess(user));

    history.push('/home');
  } catch (err) {
    toast.error('Usuário ou senha inválidos.');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { user } = payload.auth;

  if (user && user.token) {
    api.defaults.headers.Authorization = `Bearer ${user.token}`;
  }
}

export function doLogout({ payload }) {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', doLogin),
  takeLatest('@auth/LOGOUT', doLogout),
]);
