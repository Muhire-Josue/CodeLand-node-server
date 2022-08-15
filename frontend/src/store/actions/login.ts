import { ReduxActionType } from 'src/types';
import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from 'src/store/action-types/user';
import apiAction from 'src/helpers/apiAction';

export default (
  data: Record<string, string>,
  successCallback?: (res?: any) => void,
  errorCallback?: (err?: any) => void,
): ReduxActionType =>
  apiAction({
    method: 'POST',
    url: '/auth/login',
    data,
    onStart:
      () =>
      (dispatch): void => {
        dispatch({ type: LOGIN_START });
      },
    onSuccess:
      (res) =>
      (dispatch): void => {
        dispatch({ type: LOGIN_SUCCESS, payload: res });
        if (typeof successCallback === 'function') successCallback(res);
      },
    onFailure:
      (err) =>
      (dispatch): void => {
        dispatch({ type: LOGIN_FAILURE, payload: err });
        if (typeof errorCallback === 'function') errorCallback(err);
      },
  });
