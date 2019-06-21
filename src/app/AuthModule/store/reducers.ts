import { AuthState } from './state';
import { LoginAction } from './actions';
import { ActionTypes } from './actions';

export const initialState: AuthState = {
  username: ''
};

export function authReducer(state = initialState, action: LoginAction) {
  if (ActionTypes.LOGIN) {
    state.username = action.payload && action.payload.username;
    localStorage.setItem('token', 'fdmlfjeafaeezflajfz');
  }
  return state;
}
