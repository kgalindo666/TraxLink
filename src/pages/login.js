import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    textAlign: "center"
  }
};

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: {}
    };
  }

  handleSubmit = event => {
    console.log("HELLLLLO");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2" className={classes.ageTitle}>
            login
          </Typography>

          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <Button type="submit" variant="contained" color={"primary"} className={classes.button}>BUTTON</Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);
