import { merge } from "lodash";
import { RECEIVE_TRUCKS, RECEIVE_TRUCK } from "../../actions/truck_actions";

const trucksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRUCKS:
      return action.payload.trucks;
    case RECEIVE_TRUCK:
      return merge({}, state, action.payload.trucks);
    default:
      return state;
  }
};

export default trucksReducer;
