import { State } from '.';

export type User = {
  signup: State;
  login: State;
};

export type Medical = State;

export default interface InitialState {
  user: User;
  medical: Medical;
}
