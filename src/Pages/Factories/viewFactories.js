import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import Factory from "../../Components/Factories/viewFactory";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Cockpit
          active="3"
          content={
            <div>
              <Factory />
            </div>
          }
        />
      </div>
    );
  }
}

export default Dashboard;
