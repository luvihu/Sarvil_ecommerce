import { combineReducers } from "redux";
import authReducer from "./authReducer";
import planReducer from "./planReducer";


// Combina todos los reducers en uno solo
const rootReducer = combineReducers({
  auth: authReducer,
  plan: planReducer   
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

