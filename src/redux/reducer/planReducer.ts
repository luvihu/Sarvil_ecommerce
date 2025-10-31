import type { AnyAction } from 'redux';
import { ALL_PLANS , CREATE_PLAN, DELETE_PLAN, UPDATE_PLAN, PLAN_ERROR} from "../actionsTypes";
import type { IPlan } from '../../components/interfaces/Interfaces';

export interface PlanState {
  plans: IPlan[] | null;
  error: string | null;
};

const initialState: PlanState = {
  plans: null,
  error: null,
};

const planReducer = (state= initialState, action:AnyAction): PlanState => {
  switch (action.type) {
    case ALL_PLANS:
        return {
        ...state,
        plans: action.payload,
        error: null
      };
    case CREATE_PLAN:
      return {
        ...state,
        plans: [...(state.plans || []), action.payload],
        error: null
      };
    case DELETE_PLAN:
      return {
        ...state,
        plans: state.plans?.filter(plan => plan.id !== action.payload) || [], 
        error: null
      };
    case UPDATE_PLAN:
      return {
        ...state,
        plans: state.plans?.map(plan => plan.id === action.payload.id ? action.payload : plan) || [], 
        error: null
      };
    case PLAN_ERROR:
      return {
        ...state,
        error: action.payload,
       };
    default:
      return state;
  }
}
export default planReducer
