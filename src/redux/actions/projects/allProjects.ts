import axios from "axios";
import { ALL_PROJECTS,  PROJECT_ERROR } from "../../actionsTypes";
import type { Dispatch } from 'redux';

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export const allProjects = () => {
  return async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${API_URL_BASE}/project`);
        console.log(response.data.data);
        dispatch({
        type: ALL_PROJECTS,
        payload: response.data.data,
      });
    } catch (error) {
      let errorMessage = "Error desconocido";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: errorMessage,
      });
    }
  };
};

