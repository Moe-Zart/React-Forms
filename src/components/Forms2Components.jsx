import React from 'react';

const Forms2Components = (props) => {
    return (
        <main>
          <form>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={props.handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={props.handleChange}
            />
            <br />
            <input
              type="number"
              placeholder="Age"
              name="age"
              onChange={props.handleChange}
            />
            <br />
            {/* For the gender below, you need to specify the value so that the name equals to the value you set
            , which will be male and female */}
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={props.handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={props.handleChange}
              />{" "}
              Female
            </label>
            <br />
            <select name="travelDestinations" onChange={props.handleChange}>
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
                onChange={props.handleChange}
                checked={props.data.halal}
              />
              Halal
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="vegan"
                value="vegan"
                onChange={props.handleChange}
                checked={props.data.vegan}
              />
              Vegan
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="lactoseFree"
                value="lactose free"
                onChange={props.handleChange}
                checked={props.data.lactoseFree}
              />
              Lactose Free
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="glutenFree"
                value="gluten free"
                onChange={props.handleChange}
                checked={props.data.glutenFree}
              />
              Gluten Free
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
          <hr />
          <div>
            <h1>Entered Information:</h1>
            <h3>Your Name: {props.data.firstName + " " + props.data.lastName}</h3>
            <h3>Your Age: {props.data.age}</h3>
            <h3>Your Gender: {props.data.gender}</h3>
            <h3>Your Travel Destination: {props.data.travelDestinations}</h3>
            <h3>Your Dietary Restrictions:</h3>
            <p>{props.data.halal ? "Halal" : null}</p>
            <p>{props.data.vegan ? "Vegan" : null}</p>
            <p>{props.data.lactoseFree ? "Lactose Free" : null}</p>
            <p>{props.data.glutenFree ? "Gluten Free" : null}</p>
          </div>
        </main>
      );
}

export default Forms2Components;
