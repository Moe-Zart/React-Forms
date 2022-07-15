import React from "react";

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
          {/* For the gender below, you need to specify the value so that the name equals to the value you set
          , which will be male and female */}
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />
          <select name="travelDestinations" onChange={this.handleChange}>
            <option>--Please Choose Your Destination:--</option>
            <option value="switzerland">Switzerland</option>
            <option value="dubai">Dubai</option>
            <option value="italy">Italy</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="halal"
              value="halal"
              onChange={this.handleChange}
              checked={this.state.halal}
            />
            Halal
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="vegan"
              value="vegan"
              onChange={this.handleChange}
              checked={this.state.vegan}
            />
            Vegan
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              value="lactose free"
              onChange={this.handleChange}
              checked={this.state.lactoseFree}
            />
            Lactose Free
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="glutenFree"
              value="gluten free"
              onChange={this.handleChange}
              checked={this.state.glutenFree}
            />
            Gluten Free
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <div>
          <h1>Entered Information:</h1>
          <h3>Your Name: {this.state.firstName + " " + this.state.lastName}</h3>
          <h3>Your Age: {this.state.age}</h3>
          <h3>Your Gender: {this.state.gender}</h3>
          <h3>Your Travel Destination: {this.state.travelDestinations}</h3>
          <h3>Your Dietary Restrictions:</h3>
          <p>{this.state.halal ? "Halal" : null}</p>
          <p>{this.state.vegan ? "Vegan" : null}</p>
          <p>{this.state.lactoseFree ? "Lactose Free" : null}</p>
          <p>{this.state.glutenFree ? "Gluten Free" : null}</p>
        </div>
      </main>
    );
  }
}

export default Forms2;
