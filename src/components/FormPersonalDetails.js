import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { AppBar } from "material-ui";
import { styles } from "ansi-colors";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Breaking Details" />
          <TextField
            hintText="Enter Your Bboy/Bgirl Name"
            floatingLabelText="B-Boy/B-Girl Name"
            onChange={handleChange("bboy")}
            defaultValue={values.bboy}
          />
          <br />
          <TextField
            hintText="What Crew do you Represent?"
            floatingLabelText="Crew Name"
            onChange={handleChange("crew")}
            defaultValue={values.crew}
          />
          <br />
          <TextField
            hintText="What Country are you from?"
            floatingLabelText="Country"
            onChange={handleChange("country")}
            defaultValue={values.country}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

// const styles = {
//   button: {
//     margin: 15
//   }
// };

export default FormPersonalDetails;
