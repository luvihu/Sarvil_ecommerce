import axios from "axios";
import { DELETE_PLAN, PLAN_ERROR } from "../../actionsTypes";
import type { Dispatch } from 'redux';

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export const deletePlan = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No se proporcionó un token de autenticación");
      }
      
      await axios.delete(`${API_URL_BASE}/plan/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
        dispatch({
        type: DELETE_PLAN,
        payload: id
      });
      

    } catch (error) {
      let errorMessage = "Error de eliminación desconocido";
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