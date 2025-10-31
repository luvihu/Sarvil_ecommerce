import type { IInquiry } from "../../components/interfaces/Interfaces";
import { CREATE_INQUIRY, INQUIRY_ERROR, ALL_INQUIRIES } from "../../redux/actionsTypes";
import type { AnyAction } from 'redux';

export interface InquiryState {
  inquiries: IInquiry[] | null;
  error: string | null;
};

const initialState: InquiryState = {
  inquiries: null,
  error: null,
};

const inquiryReducer = (state= initialState, action:AnyAction): InquiryState => {
  switch (action.type) {
    case ALL_INQUIRIES:
       return {
        ...state,
        inquiries: action.payload,
      };
    case CREATE_INQUIRY:
      return {
        ...state,
        inquiries: [...(state.inquiries || []), action.payload],
      };
    case INQUIRY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default inquiryReducer;
