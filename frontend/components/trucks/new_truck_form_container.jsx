import { connect } from "react-redux";
import TruckForm from "./new_truck_form";
import { createTruck } from "../../actions/truck_actions";

const mSTP = state => ({
  errors: state.errors.truckErrors
});

const mDTP = dispatch => ({
  createTruck: truck => dispatch(createTruck(truck))
});

const TruckFormContainer = connect(
  mSTP,
  mDTP
)(TruckForm);

export default TruckFormContainer;
