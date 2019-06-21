import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor(payload: { username: string }) {}
}

// export const ActionLogin = (payload: { username: string }) => {
//   return {
//     type: ActionTypes.LOGIN,
//     payload
//   };
// };
