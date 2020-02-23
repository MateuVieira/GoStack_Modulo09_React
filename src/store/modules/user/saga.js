import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const objectUser = { name, email };
    // eslint-disable-next-line prefer-object-spread
    const profile = Object.assign(objectUser, rest.oldPassword ? rest : {});

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com successo');
    yield put(updateProfileSuccess(response.data));

    history.push('/profile');
  } catch (err) {
    toast.error('Erro ao atualizar o perfil, confira seus dados.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
