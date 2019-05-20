import { combineReducers } from "redux";
import trucksReducer from "./trucks_reducer";
import jobsReducer from "./jobs_reducer";

const entitiesReducer = combineReducers({
  trucks: trucksReducer,
  jobs: jobsReducer
});

export default entitiesReducer;
