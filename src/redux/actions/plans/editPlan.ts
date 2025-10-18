import axios from "axios";
import Swal from "sweetalert2";
import { UPDATE_PLAN, PLAN_ERROR } from "../../actionsTypes";
import type{ Dispatch } from 'redux';
import type { IPlan } from "../../../components/interfaces/Interfaces";

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;
const showSuccess = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "¡Plan actualizado exitosamente!",
    showConfirmButton: false,
    timer: 2000,
    width: '300px',
    background: '#f0f8ff',
    toast: true
  })
};

export const editPlan = (id: string, change: Partial<IPlan>) => {
  return async (dispatch: Dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No se proporcionó un token de autenticación");
      }
      
      const response = await axios.put(`${API_URL_BASE}/plan/${id}`, change, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
        dispatch({
        type: UPDATE_PLAN,
        payload: response.data.data
      });
      showSuccess();
      
    } catch (error) {
      let errorMessage = "Error de actualización desconocido";
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