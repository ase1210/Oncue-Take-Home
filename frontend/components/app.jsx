import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TruckFormContainer from "./trucks/new_truck_form_container";
import TruckIndexContainer from "./trucks/truck_index_container";
import JobFormContainer from "./jobs/new_job_form_container";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/trucks/new" component={TruckFormContainer} />
      <Route exact path="/jobs/new" component={JobFormContainer} />
      <Route exact path="/trucks" component={TruckIndexContainer} />
      <Redirect to="/trucks" />
    </Switch>
  </div>
);

export default App;
