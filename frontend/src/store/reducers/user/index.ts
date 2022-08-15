import { ReduxActionType } from 'src/types';
import { User } from 'src/types/InitialState';
import initialState from 'src/store/initialState';
import signup from './signup';
import login from './login';

export default (state: User = initialState.user, action: ReduxActionType = { type: '', payload: null }): User => {
  return {
    ...state,
    ...signup(state, action),
    ...login(state, action),
  };
};
