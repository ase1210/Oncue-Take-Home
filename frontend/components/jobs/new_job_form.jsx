import React from "react";
import MinOptions from "../form_utilities/min_options";
import HourOptions from "../form_utilities/hour_options";

const JobFormErrors = props => (
  <div className="job-errors-container">
    {props.errors.map((error, idx) => (
      <p className="job-errors-item" key={idx}>
        {error}
      </p>
    ))}
  </div>
);

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: undefined,
      s_hour: undefined,
      s_min: "0",
      e_hour: undefined,
      e_min: "0"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDateInput(e) {
    let selection = e.target.value;
    let day = parseInt(selection.slice(8));
    let date = new Date(selection);
    date.setDate(day);
    this.setState({ date: date });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createJob(this.state).then(() => {
      this.props.history.push("/trucks");
    });
  }

  render() {
    let today = new Date();
    today = today.toISOString().slice(0, 10);
    return (
      <section className="create-truck">
        <h1>Add Job</h1>

        {this.props.errors.length > 0 ? (
          <JobFormErrors errors={this.props.errors} />
        ) : (
          <></>
        )}

        <label>
          Name
          <br />
          <input
            type="text"
            placeholder="Name of person"
            onChange={this.handleInput("name")}
          />
        </label>
        <br />
        <br />

        <label>
          Move Date
          <br />
          <input type="date" onChange={this.handleDateInput} min={today} />
        </label>
        <br />
        <br />

        <label>
          Start Time (hour:min)
          <br />
          <select defaultValue="" onChange={this.handleInput("s_hour")}>
            <HourOptions />
          </select>{" "}
          <select defaultValue="0" onChange={this.handleInput("s_min")}>
            <MinOptions />
          </select>
        </label>
        <br />
        <br />

        <label>
          End Time (hour:min)
          <br />
          <select defaultValue="" onChange={this.handleInput("e_hour")}>
            <HourOptions />
          </select>{" "}
          <select defaultValue="0" onChange={this.handleInput("e_min")}>
            <MinOptions />
          </select>
        </label>
        <br />
        <br />

        <button onClick={this.handleSubmit}>Add Job</button>
      </section>
    );
  }
}
export default JobForm;
