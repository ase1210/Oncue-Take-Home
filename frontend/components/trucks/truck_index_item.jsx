import React from "react";
import TruckJobItem from "./truck_job_item";

const TruckIndexItem = props => (
  <>
    <div className="truck-item">
      <p>{props.truck.name} assignments:</p>
      {props.jobs.length === 0 ? (
        <p>No assignments</p>
      ) : (
        props.jobs.map(job => <TruckJobItem key={job.id} job={job} />)
      )}
      <br />
    </div>
  </>
);

export default TruckIndexItem;
