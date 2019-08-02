import React, { Component } from "react";
import Cockpit from "../../Components/Cockpit/index";
import Product from "../../Components/Products/viewProduct";

class viewProject extends Component {
  render() {
    return (
      <div>
        <Cockpit active="5" content={<Product />} />
      </div>
    );
  }
}

export default viewProject;
