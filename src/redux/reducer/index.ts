import { combineReducers } from "redux";
import authReducer from "./authReducer";
import planReducer from "./planReducer";
import inquiryReducer from "./inquiryReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  plan: planReducer,
  inquiry: inquiryReducer,
  project: projectReducer,  
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

