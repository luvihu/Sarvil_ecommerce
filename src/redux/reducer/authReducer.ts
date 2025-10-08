import { LOGIN_USER, LOGOUT_USER } from '../actionsTypes';
import type { AnyAction } from 'redux';

export interface AuthState {
  user: null;
  token: string | null;
  role: 'ADMIN' | null;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  role: null,
  isLoggedIn: false,
};
 
const authReducer = (state = initialState, action: AnyAction): AuthState => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};
 export default authReducer;
