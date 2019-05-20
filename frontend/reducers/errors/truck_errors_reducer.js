import {
  RECEIVE_TRUCK_ERRORS,
  RECEIVE_TRUCK
} from "../../actions/truck_actions";

const truckErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRUCK_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_TRUCK:
      return [];
    default:
      return state;
  }
};

export default truckErrorsReducer;
