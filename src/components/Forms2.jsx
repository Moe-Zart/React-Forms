import React from "react";
import Forms2Components from "./Forms2Components";

class Forms2 extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      travelDestinations: "",
      halal: true,
      vegan: false,
      lactoseFree: false,
      glutenFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    event.target.type === "checkbox"
      ? this.setState({
          [event.target.name]: event.target.checked,
        })
      : this.setState({
          [event.target.name]: event.target.value,
        });
  }
  render() {
      return(
          <Forms2Components
          handleChange = {this.handleChange}
          data={this.state}
          />
          )
  }
}

export default Forms2;
