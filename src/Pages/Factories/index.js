import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import Factory from "../../Components/Factories/index";

class Factories extends Component {
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

export default Factories;
