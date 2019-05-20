import React from "react";

const TruckFormErrors = props => (
  <div className="truck-errors-container">
    {props.errors.map((error, idx) => (
      <p className="truck-errors-item" key={idx}>
        {error}
      </p>
    ))}
  </div>
);

class TruckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", start_time: undefined, end_time: undefined };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTruck(this.state).then(() => {
      this.props.history.push("/trucks");
    });
  }

  render() {
    const times = [];
    for (let i = 5; i < 23; i++) {
      times.push(i);
    }
    return (
      <section className="create-truck">
        <h1>Create Truck</h1>

        {this.props.errors.length > 0 ? (
          <TruckFormErrors errors={this.props.errors} />
        ) : (
          <></>
        )}

        <label>
          Name
          <br />
          <input
            type="text"
            placeholder="Name of truck"
            onChange={this.handleInput("name")}
          />
        </label>
        <br />
        <br />
        <label>
          Start Time (hour)
          <br />
          <select defaultValue="" onChange={this.handleInput("start_time")}>
            <option value="">Choose a time</option>
            {times.map((time, i) => {
              return (
                <option key={i} value={`${time}`}>
                  {time < 12
                    ? time + "am"
                    : time === 12
                    ? "12pm"
                    : time - 12 + "pm"}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <br />
        <label>
          End Time (hour)
          <br />
          <select defaultValue="" onChange={this.handleInput("end_time")}>
            <option value="">Choose a time</option>
            {times.map((time, i) => {
              return (
                <option key={i} value={`${time}`}>
                  {time < 12
                    ? time + "am"
                    : time === 12
                    ? "12pm"
                    : time - 12 + "pm"}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <br />
        <button onClick={this.handleSubmit}>Create Truck</button>
      </section>
    );
  }
}
export default TruckForm;
