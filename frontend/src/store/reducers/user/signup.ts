import { ReduxActionType } from 'src/types';
import { User } from 'src/types/InitialState';
import { SIGNUP_FAILURE, SIGNUP_START, SIGNUP_SUCCESS } from 'src/store/action-types/user';

export default (state: User, { type, payload }: ReduxActionType): User | null => {
  switch (type) {
    case SIGNUP_START:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: true,
          error: null,
          success: false,
        },
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup: {
          ...state.signup,
          error: payload,
          loading: false,
          success: false,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          ...state.signup,
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
