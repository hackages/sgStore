import { AuthState } from './state';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN;
  payload: AuthState = { username: '' };
  constructor(payload: AuthState) {
    this.payload = payload;
  }
}

// export const ActionLogin = (payload: { username: string }) => {
//   return {
//     type: ActionTypes.LOGIN,
//     payload
//   };
// };
