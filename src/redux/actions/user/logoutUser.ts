import type { Dispatch } from "redux";
import { LOGOUT_USER } from "../../actionsTypes";

export const logoutUser = () => {
  return (dispatch: Dispatch) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
      dispatch({
      type: LOGOUT_USER
    
    });
  };
};
