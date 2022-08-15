import { InitialState, ReduxDispatchType } from 'src/types';
import axiosHelper from 'src/helpers/axiosHelper';
import { API_REQUEST } from 'src/store/action-types/apiActions';

export default ({ dispatch, getState }: { dispatch: ReduxDispatchType; getState: () => InitialState }) =>
  (next: ReduxDispatchType) =>
  async ({ type = '', payload = {} as Record<string, any> }): Promise<void | InitialState> => {
    if (type !== API_REQUEST) {
      return next({ type, payload });
    }
    try {
      if (typeof payload.onStart === 'function') {
        await payload.onStart()(dispatch);
      }
      const { data } = await axiosHelper(payload.httpOptions).request({
        method: payload.method.toLowerCase(),
        url: payload.url,
        data: payload.data,
        params: payload.queries,
      });

      if (typeof payload.onSuccess === 'function') {
        await payload.onSuccess(data)(dispatch);
      }
    } catch (err: any) {
      const error = err.response ? err.response.data : { message: err.message };
      if (typeof payload?.onFailure === 'function') {
        await payload.onFailure(error)(dispatch);
      }
    }
    if (typeof payload.onEnd === 'function') {
      await payload.onEnd()(dispatch);
    }
    return getState();
  };
