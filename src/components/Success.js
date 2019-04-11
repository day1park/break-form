import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar } from "material-ui";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Completed!" />
          <h1>Thank you for your entering this Breaking Competition</h1>
          <p>you will receive an email with further competition details.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
