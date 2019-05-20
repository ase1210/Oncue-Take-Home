import React from "react";
import { formatDate, formatTime } from "../../util/format_date_time_util";

const TruckJobItem = props => (
  <>
    <div className="job-item">
      <p>
        {props.job.name}, {formatDate(props.job.date)},{" "}
        {formatTime(props.job.start)} - {formatTime(props.job.end)}
      </p>
    </div>{" "}
  </>
);

export default TruckJobItem;
