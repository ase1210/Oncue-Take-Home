import { RECEIVE_JOB_ERRORS } from "../../actions/job_actions";

const jobErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_JOB_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default jobErrorsReducer;
