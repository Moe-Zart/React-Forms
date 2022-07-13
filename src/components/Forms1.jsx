import React from "react";

class Forms1 extends React.Component {
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:"",
            isFriendly:true
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        //we dont care what the previous state was, so we directly change the state.
        //we want the firstName state to change to the current value of the input box.
        /* when an event fires (e.g: the letters passing into the input area), 
            we pass the predetermined event parameter into the method */
        event.target.type === "checkbox" ? this.setState({[event.target.name]:event.target.checked}):this.setState({[event.target.name]: event.target.value}) //the target is the input area
        //this works because the target name, aka the name of the inputs below are the same as the states above
        console.log(event.target.checked)
    }
  render() {
    return (
      <form>
        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
        <br />
        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
        <h1>{this.state.firstName} <br />{this.state.lastName}</h1>
        <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default Forms1;
