import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import DashboardComp from "../../Components/Dashboard/index";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Cockpit
          active="1"
          content={
            <div>
              <DashboardComp />
            </div>
          }
        />
      </div>
    );
  }
}

export default Dashboard;
