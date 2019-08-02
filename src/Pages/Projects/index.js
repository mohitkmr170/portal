import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import Projects from "../../Components/Projects/index";

class Users extends Component {
  render() {
    return (
      <div>
        <Cockpit
          active="4"
          content={
            <div>
              <Projects />
            </div>
          }
        />
      </div>
    );
  }
}

export default Users;
