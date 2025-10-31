import axios from "axios";
import { CREATE_INQUIRY, INQUIRY_ERROR } from "../../actionsTypes";
import type { Dispatch } from 'redux';
import type { ICreateInquiry } from "../../../components/interfaces/Interfaces";

const API_URL_BASE = import.meta.env.VITE_API_URL_BASE;

export const createInquiry = (inquiryData: ICreateInquiry) => {
    return async (dispatch: Dispatch) => {
        try {
               
            const response = await axios.post(`${API_URL_BASE}/inquiry/create`, inquiryData)
                
                dispatch({
                type: CREATE_INQUIRY,
                payload: response.data.data
            });
        } catch (error) {
            let errorMessage = "Error de consulta desconocido";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            dispatch({
                type: INQUIRY_ERROR,
                payload: errorMessage
            });
        }
    };
};