import axios from "axios";
import { ALL_INQUIRIES,  INQUIRY_ERROR } from "../../actionsTypes";
import type { Dispatch } from 'redux';

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export const allInquiries = () => {
  return async (dispatch: Dispatch) => {
    try {
      const token = localStorage.getItem('token');
      if(!token){
        throw new Error("No se proporcionó un token de autenticación");
      }
        const response = await axios.get(`${API_URL_BASE}/inquiry`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        dispatch({
        type: ALL_INQUIRIES,
        payload: response.data.data,
      });
    } catch (error) {
      let errorMessage = "Error desconocido";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch({
        type: INQUIRY_ERROR,
        payload: errorMessage,
      });
    }
  };
};
