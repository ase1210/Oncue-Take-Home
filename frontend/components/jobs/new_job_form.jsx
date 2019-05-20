import React from "react";

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
      s_min: undefined,
      e_hour: undefined,
      e_min: undefined
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
    const times = [];
    for (let i = 5; i < 23; i++) {
      times.push(i);
    }
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
          <input type="date" onChange={this.handleDateInput} />
        </label>
        <br />
        <br />
        <label>
          Start Time (hour:min)
          <br />
          <select defaultValue="" onChange={this.handleInput("s_hour")}>
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
          </select>{" "}
          <select defaultValue="" onChange={this.handleInput("s_min")}>
            <option value="">Choose a time</option>
            <option value="0">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          End Time (hour:min)
          <br />
          <select defaultValue="" onChange={this.handleInput("e_hour")}>
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
          </select>{" "}
          <select defaultValue="" onChange={this.handleInput("e_min")}>
            <option value="">Choose a time</option>
            <option value="0">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
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
