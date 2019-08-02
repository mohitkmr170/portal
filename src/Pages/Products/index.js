import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import Products from "../../Components/Products/index";

class Users extends Component {
  render() {
    return (
      <div>
        <Cockpit
          active="5"
          content={
            <div>
              <Products />
            </div>
          }
        />
      </div>
    );
  }
}

export default Users;
