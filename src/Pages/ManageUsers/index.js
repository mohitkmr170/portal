import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import User from "../../Components/Users";

class Users extends Component {
  render() {
    return (
      <div>
        <Cockpit
          active="2"
          content={
            <div>
              <User />
            </div>
          }
        />
      </div>
    );
  }
}

export default Users;
