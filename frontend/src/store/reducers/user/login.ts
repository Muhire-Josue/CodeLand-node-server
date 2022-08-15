import { ReduxActionType } from 'src/types';
import { User } from 'src/types/InitialState';
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from 'src/store/action-types/user';

export default (state: User, { type, payload }: ReduxActionType): User | null => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          error: null,
          success: false,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          error: payload,
          loading: false,
          success: false,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          data: payload,
          error: null,
          loading: false,
          success: true,
        },
      };
    default:
      return null;
  }
};
