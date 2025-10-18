import { LOGIN_USER, LOGOUT_USER, AUTH_ERROR } from '../actionsTypes';
import type { AnyAction } from 'redux';
import type { IUser } from '../../components/interfaces/Interfaces';

export interface AuthState {
  user: IUser | null;
  token: string | null;
  isLoggedIn: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  error: null
};
 
const authReducer = (state = initialState, action: AnyAction): AuthState => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        error: null
      };
    case LOGOUT_USER:
      return initialState;

    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload 
      };

    default:
      return state;
  }
};
 export default authReducer;
