import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import Project from "../../Components/Projects/viewProject";

class viewProject extends Component {
  render() {
    return (
      <div>
        <Cockpit active="4" content={<Project />} />
      </div>
    );
  }
}

export default viewProject;
