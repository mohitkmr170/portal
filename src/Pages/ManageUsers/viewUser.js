import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import User from "../../Components/Users/viewUser";

class Dashboard extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div>
        <Cockpit active="2" content={<User />} />
      </div>
    );
  }
}

export default Dashboard;
