import { combineReducers } from "redux";
import commonReducer from "./productReducer";

const rootReducer = combineReducers({commonReducer})

export default rootReducer;