import React, { Component } from 'react';
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";

import SearchBox from "modules/Search/containers/SearchContainer";

import logo from "resources/images/logo-red.jpg";

class restaurants extends Component {
  render() {
    return (
      <div>
        <AppBar>
            <img src={logo} alt="logo" />
            <SearchBox />
        </AppBar>
      </div>
    )
  }
}

export default restaurants;
