import { connect } from "react-redux";
import { fetchTrucks } from "../../actions/truck_actions";
import TruckIndex from "./truck_index";
import {
  selectTruckJobs,
  selectTrucks
} from "../../selectors/truck_job_selector";

const mSTP = state => {
  let jobs = selectTruckJobs(state);
  let trucks = selectTrucks(state);
  return {
    trucks,
    jobs
  };
};

const mDTP = dispatch => ({
  fetchTrucks: () => dispatch(fetchTrucks())
});

const TruckIndexContainer = connect(
  mSTP,
  mDTP
)(TruckIndex);

export default TruckIndexContainer;
