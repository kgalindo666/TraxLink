import React, { Component } from "react";
import { Link } from 'react-router-dom';

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


class Navbar extends Component {
  render() { 
  return(
    <AppBar>
    <Toolbar className='nav-container'>
      <p>TraxLink</p>
      <Button color="inherit" component={Link} top='/login'>Login</Button>
      <Button color="inherit" component={Link} top='/'>Home</Button>
      <Button color="inherit" component={Link} top='/signup'>Sign Up</Button>
    </Toolbar>
  </AppBar>
  )
  }
}

export default Navbar;
