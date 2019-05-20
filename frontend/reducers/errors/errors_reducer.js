import { combineReducers } from "redux";
import truckErrorsReducer from "./truck_errors_reducer";
import jobErrorsReducer from "./job_errors_reducer";

const errorsReducer = combineReducers({
  truckErrors: truckErrorsReducer,
  jobErrors: jobErrorsReducer
});

export default errorsReducer;
