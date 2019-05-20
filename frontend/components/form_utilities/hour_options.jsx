import React from "react";

const times = [];
for (let i = 5; i < 23; i++) {
  times.push(i);
}

const HourOptions = props => (
  <>
    <option disabled value="">
      Choose a time
    </option>
    {times.map((time, i) => {
      return (
        <option key={i} value={`${time}`}>
          {time < 12 ? time + "am" : time === 12 ? "12pm" : time - 12 + "pm"}
        </option>
      );
    })}
  </>
);

export default HourOptions;
