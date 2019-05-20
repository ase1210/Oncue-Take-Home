import React from "react";
import { Link } from "react-router-dom";
import TruckIndexItem from "./truck_index_item";

class TruckIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTrucks();
  }

  render() {
    return (
      <div>
        <Link to={`/trucks/new`}>
          <p>Register a Truck</p>
        </Link>
        <Link to={`/jobs/new`}>
          <p>Book a Job</p>
        </Link>
        <section className="truck-index-container">
          <h1>Trucks</h1>
          {this.props.trucks.map(truck => {
            return (
              <TruckIndexItem
                key={truck.id}
                truck={truck}
                jobs={this.props.jobs[truck.id] || []}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
export default TruckIndex;
