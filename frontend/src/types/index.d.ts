declare module '*.png';

declare module '*.jpg';

export { default as InitialState } from './InitialState';
export { default as State } from './State';
export { default as ApiAction } from './ApiAction';
export type ReduxDispatchType = import('./ReduxDispatchType').default;
export type ReduxActionType = import('./ReduxActionType').default;
