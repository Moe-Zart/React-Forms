import React from "react";

class Forms1 extends React.Component {
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        //we dont care what the previous state was, so we directly change the state.
        //we want the firstName state to change to the current value of the input box.
        /* when an event fires (e.g: the letters passing into the input area), 
            we pass the predetermined event parameter into the method */
        this.setState({firstName: event.target.value}) //the target is the input area

    }
  render() {
    return (
      <form>
        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
        <br />
        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    );
  }
}

export default Forms1;
