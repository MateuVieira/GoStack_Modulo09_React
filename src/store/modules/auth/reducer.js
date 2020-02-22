import produce from 'immer';

const INICIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INICIAL_STATE, acttion) {
  return produce(state, draft => {
    switch (acttion.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = acttion.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
