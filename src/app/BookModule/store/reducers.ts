import { Action } from '@ngrx/store';
import { ActionTypes } from './actions';

export const initialState = {
  username: ''
};

export function authReducer(state = initialState, action: Action) {
  if (ActionTypes.LOGIN) {
  }
  return state;
}
