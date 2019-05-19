import { RECEIVE_TRUCK_ERRORS } from "../../actions/truck_actions";

const truckErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRUCK_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default truckErrorsReducer;
