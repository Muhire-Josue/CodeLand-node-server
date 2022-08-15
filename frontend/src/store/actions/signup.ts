import { ReduxActionType } from 'src/types';
import { SIGNUP_START, SIGNUP_FAILURE, SIGNUP_SUCCESS } from 'src/store/action-types/user';
import apiAction from 'src/helpers/apiAction';

export default (
  data: Record<string, string>,
  successCallback?: (res?: any) => void,
  errorCallback?: (err?: any) => void,
): ReduxActionType =>
  apiAction({
    method: 'POST',
    url: '/auth/signup',
    data,
    onStart:
      () =>
      (dispatch): void => {
        dispatch({ type: SIGNUP_START });
      },
    onSuccess:
      (res) =>
      (dispatch): void => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res });
        if (typeof successCallback === 'function') successCallback(res);
      },
    onFailure:
      (err) =>
      (dispatch): void => {
        dispatch({ type: SIGNUP_FAILURE, payload: err });
        if (typeof errorCallback === 'function') errorCallback(err);
      },
  });
