import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import User from "../../Components/Users/editUserComp";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Cockpit active="2" content={<User />} />
      </div>
    );
  }
}

export default Dashboard;
