import { produce } from 'immer';

const INITIAL_STATE = {
  logged: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_SUCCESS':
      return produce(state, draft => {
        draft.user = action.user;
        draft.logged = true;
      });
    default:
      return state;
  }
}
