import * as apiActionTypes from 'src/store/action-types/apiActions';
import { ApiAction, ReduxDispatchType, ReduxActionType } from 'src/types';

export default ({
  url = '',
  method = 'GET',
  data,
  queries,
  httpOptions,
  onStart = () =>
    (dispatch: ReduxDispatchType): void =>
      dispatch({
        type: apiActionTypes.API_REQUEST_START,
        payload: { loading: true },
      }),
  onSuccess = () =>
    (dispatch: ReduxDispatchType): void =>
      dispatch({
        type: apiActionTypes.API_REQUEST_SUCCESS,
        payload: { loading: false },
      }),
  onFailure = () =>
    (dispatch: ReduxDispatchType): void =>
      dispatch({
        type: apiActionTypes.API_REQUEST_FAILURE,
        payload: { loading: false },
      }),
  onEnd = () =>
    (dispatch: ReduxDispatchType): void =>
      dispatch({
        type: apiActionTypes.API_REQUEST_END,
        payload: { loading: false },
      }),
}: ApiAction): ReduxActionType => {
  const urlQueries = queries || {};
  if (queries) {
    Object.keys(queries).forEach((key) => {
      urlQueries[key] = typeof urlQueries[key] === 'string' ? urlQueries[key].trim() : urlQueries[key];
      return urlQueries[key] || delete urlQueries[key];
    });
  }

  return {
    type: apiActionTypes.API_REQUEST,
    payload: {
      url,
      method,
      httpOptions,
      queries: urlQueries,
      data,
      onStart,
      onSuccess,
      onFailure,
      onEnd,
    },
  };
};
