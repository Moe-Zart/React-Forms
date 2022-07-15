import React from "react";

class Forms2 extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Age"
            name="age"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <div>
          <h1>Entered Information:</h1>
          <h3>Your Name: {this.state.firstName + " " + this.state.lastName}</h3>
          <h3>Your Age: {this.state.age}</h3>
        </div>
      </main>
    );
  }
}

export default Forms2;
