import type { AnyAction } from 'redux';
import { SELECT_PLAN, RESET_PLAN } from "../actionsTypes";
// import AnyAction from 'redux';

export interface PlanState {
  selectedPlan: string | null;
};

const initialState: PlanState = {
  selectedPlan: null,
};

const planReducer = (state= initialState, action:AnyAction): PlanState => {
  switch (action.type) {
    case SELECT_PLAN:
      return {
        ...state,
        selectedPlan: action.payload
      };
    case RESET_PLAN:
      return {
        ...state,
        selectedPlan: null
      };
    default:
      return state;
  }
}
export default planReducer
