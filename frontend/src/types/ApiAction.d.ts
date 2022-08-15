import ReduxDispatchType from './ReduxDispatchType';

export default interface ApiAction {
  url: string;
  method:
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'PATCH'
    | 'OPTION'
    | 'DELETE'
    | 'HEAD'
    | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'option'
    | 'delete'
    | 'head';
  httpOptions?: Record<string, any> | null;
  queries?: Record<string, string>;
  data?: Record<string, any> | null;
  onStart?: () => (dispatch: ReduxDispatchType) => Promise<void> | void | boolean | string;
  onSuccess?: (data?: any) => (dispatch: ReduxDispatchType) => Promise<void> | void;
  onFailure?: (error?: any) => (dispatch: ReduxDispatchType) => Promise<void> | void;
  onEnd?: () => (dispatch: ReduxDispatchType) => Promise<void> | void;
}
