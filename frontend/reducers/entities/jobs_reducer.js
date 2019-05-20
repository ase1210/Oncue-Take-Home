import { merge } from "lodash";
import { RECEIVE_JOB, RECEIVE_JOBS } from "../../actions/job_actions";
import { RECEIVE_TRUCKS } from "../../actions/truck_actions";

const jobsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRUCKS:
      return merge({}, state, action.payload.jobs);
    case RECEIVE_JOBS:
      return action.payload.jobs;
    case RECEIVE_JOB:
      return merge({}, state, action.payload.jobs);
    default:
      return state;
  }
};

export default jobsReducer;
