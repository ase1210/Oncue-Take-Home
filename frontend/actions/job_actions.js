import * as JobAPIUtil from "../util/job_api_util";

export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const RECEIVE_JOB = "RECEIVE_JOB";
export const RECEIVE_JOB_ERRORS = "RECEIVE_JOB_ERRORS";

const receiveJobs = payload => ({
  type: RECEIVE_JOBS,
  payload
});

const receiveJob = payload => ({
  type: RECEIVE_JOB,
  payload
});

const receiveJobErrors = errors => ({
  type: RECEIVE_JOB_ERRORS,
  errors
});

export const fetchJobs = () => dispatch =>
  JobAPIUtil.getJobs().then(payload => dispatch(receiveJobs(payload)));

export const createJob = job => dispatch =>
  JobAPIUtil.postJob(job).then(
    job => dispatch(receiveJob(job)),
    errors => dispatch(receiveJobErrors(errors))
  );
