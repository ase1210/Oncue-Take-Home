import { connect } from "react-redux";
import JobForm from "./new_job_form";
import { createJob } from "../../actions/job_actions";

const mSTP = state => ({
  errors: state.errors.jobErrors
});

const mDTP = dispatch => ({
  createJob: job => dispatch(createJob(job))
});

const JobFormContainer = connect(
  mSTP,
  mDTP
)(JobForm);

export default JobFormContainer;
