import * as TruckAPIUtil from "../util/truck_api_util";

export const RECEIVE_TRUCKS = "RECEIVE_TRUCKS";
export const RECEIVE_TRUCK = "RECEIVE_TRUCK";
export const RECEIVE_TRUCK_ERRORS = "RECEIVE_TRUCK_ERRORS";

const receiveTrucks = payload => ({
  type: RECEIVE_TRUCKS,
  payload
});

const receiveTruck = payload => ({
  type: RECEIVE_TRUCK,
  payload
});

const receiveTruckErrors = errors => ({
  type: RECEIVE_TRUCK_ERRORS,
  errors
});

export const fetchTrucks = () => dispatch =>
  TruckAPIUtil.getTrucks().then(payload => dispatch(receiveTrucks(payload)));

export const createTruck = truck => dispatch =>
  TruckAPIUtil.postTruck(truck).then(
    truck => dispatch(receiveTruck(truck)),
    errors => dispatch(receiveTruckErrors(errors))
  );
