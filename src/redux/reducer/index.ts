import { combineReducers } from "redux";
import authReducer from "./authReducer";


// Combina todos los reducers en uno solo
const rootReducer = combineReducers({
  auth: authReducer   
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

