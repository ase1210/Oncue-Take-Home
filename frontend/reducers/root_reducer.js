import { combineReducers } from "redux";
import entitiesReducer from "./entities/entities_reducer";
import errorsReducer from "./errors/errors_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer
});

export default rootReducer;
