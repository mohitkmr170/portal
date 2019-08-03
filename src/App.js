import "./App.scss";
import "./assets/Styles/global.scss";
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../src/Pages/Login/index";
import Dashboard from "./Pages/Dashboard/index";
import User from "./Pages/ManageUsers/index";
import Factories from "./Pages/Factories/index";
import ViewUsers from "./Pages/ManageUsers/viewUser";
import ViewFactory from "./Pages/Factories/viewFactories";
import EditUser from "./Pages/ManageUsers/editUser";
import AddUser from "./Pages/ManageUsers/addUser";
import Projects from "./Pages/Projects/index";
import ViewProject from "./Pages/Projects/viewProject";
import Products from "./Pages/Products/index";
import ViewProduct from "./Pages/Products/viewProduct";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route component={ScrollToTop} />
          <Route exact path="/" component={Login} />
          <Route exact path="/(dashboard|admin)" component={Dashboard} />
          <Route exact path="/users" component={User} />
          <Route exact path="/factories" component={Factories} />
          <Route exact path="/users/:id" component={ViewUsers} />
          <Route exact path="/factories/:id" component={ViewFactory} />
          <Route path="/users/edit" component={EditUser} />
          <Route path="/users/add" component={AddUser} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ViewProject} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ViewProduct} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
