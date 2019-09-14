/* eslint-disable no-param-reassign */
import { produce } from 'immer';

const INITIAL_STATE = {
  logged: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN_SUCCESS':
        draft.user = action.user;
        draft.logged = true;
        break;
      case '@auth/LOGOUT':
        draft.user = null;
        draft.logged = false;
        break;
      default:
        return state;
    }
  });
}
