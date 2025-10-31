import axios from "axios";
import { ALL_PLANS,  PLAN_ERROR } from "../../actionsTypes";
import type { Dispatch } from 'redux';

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export const allPlans = () => {
  return async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${API_URL_BASE}/plan`);
        dispatch({
        type: ALL_PLANS,
        payload: response.data.data,
      });
    } catch (error) {
      let errorMessage = "Error desconocido";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch({
        type: PLAN_ERROR,
        payload: errorMessage,
      });
    }
  };
};
