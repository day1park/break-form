import React, { Component } from "react";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // proceed to next step
  nextStep = () => {
    // destructuring
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // go back to prev step
  prevStep = () => {
    // destructuring
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return <div />;
  }
}

export default UserForm;
