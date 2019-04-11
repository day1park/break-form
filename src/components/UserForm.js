import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    bboy: "",
    crew: "",
    country: ""
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
    const { step } = this.state;
    const { firstName, lastName, email, bboy, crew, country } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      bboy,
      crew,
      country
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
      // // do nothing
    }
  }
}

export default UserForm;
