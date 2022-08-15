import { ReduxActionType } from 'src/types';
import { GET_MEDICAL_START, GET_MEDICAL_FAILURE, GET_MEDICAL_SUCCESS } from 'src/store/action-types/medical';
import apiAction from 'src/helpers/apiAction';

export default (
  data: string,
  successCallback?: (res?: any) => void,
  errorCallback?: (err?: any) => void,
): ReduxActionType =>
  apiAction({
    method: 'GET',
    url: `/medical?role=${data}`,
    onStart:
      () =>
      (dispatch): void => {
        dispatch({ type: GET_MEDICAL_START });
      },
    onSuccess:
      (res) =>
      (dispatch): void => {
        dispatch({ type: GET_MEDICAL_SUCCESS, payload: res });
        if (typeof successCallback === 'function') successCallback(res);
      },
    onFailure:
      (err) =>
      (dispatch): void => {
        dispatch({ type: GET_MEDICAL_FAILURE, payload: err });
        if (typeof errorCallback === 'function') errorCallback(err);
      },
  });
