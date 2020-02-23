import produce from 'immer';

const INICIAL_STATE = {
  profile: [],
};

export default function user(state = INICIAL_STATE, acttion) {
  return produce(state, draft => {
    switch (acttion.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = acttion.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = acttion.payload.profile;
        break;
      }
      default:
    }
  });
}
