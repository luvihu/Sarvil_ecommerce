import { SELECT_PLAN, RESET_PLAN } from "./actionsTypes";

export const selectPlan = (planName: string) => ({
  type: SELECT_PLAN,
  payload: planName,
});

export const resetPlan = () => ({
  type: RESET_PLAN,
});
