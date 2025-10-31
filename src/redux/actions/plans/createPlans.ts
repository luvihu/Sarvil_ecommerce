import axios from "axios";
import { CREATE_PLAN, PLAN_ERROR } from "../../actionsTypes";
import type { Dispatch } from 'redux';
import type { IPlan } from "../../../components/interfaces/Interfaces";

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export const createPlan = (planData: IPlan) => {
    return async (dispatch: Dispatch) => {
        try {
            const token = localStorage.getItem("token"); 
      
      if (!token) {
        throw new Error("No se proporcionó un token de autenticación");
      }
            const response = await axios.post(`${API_URL_BASE}/plan/create`, planData,  {
                headers: {
                  Authorization: `Bearer ${token}` 
                }
              });
                dispatch({
                type: CREATE_PLAN,
                payload: response.data.data
            });
        } catch (error) {
            let errorMessage = "Error de registro desconocido";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            dispatch({
                type: PLAN_ERROR,
                payload: errorMessage
            });
        }
    };
};