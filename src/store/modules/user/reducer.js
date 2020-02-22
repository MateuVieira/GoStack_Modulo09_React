import produce from 'immer';

const INICIAL_STATE = {
  profile: [],
};

export default function user(state = INICIAL_STATE, acttion) {
  switch (acttion.type) {
    case '@auth/SIGN_IN_SUCCESS': {
      return produce(state, draft => {
        draft.profile = acttion.payload.user;
      });
    }
    default:
      return state;
  }
}
