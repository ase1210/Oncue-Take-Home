import { RECEIVE_JOB_ERRORS, RECEIVE_JOB } from "../../actions/job_actions";

const jobErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_JOB_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_JOB:
      return [];
    default:
      return state;
  }
};

export default jobErrorsReducer;
