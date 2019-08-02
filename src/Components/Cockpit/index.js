import React, { Component } from "react";
import { Layout, Menu, Icon, Dropdown } from "antd";
import { Link } from "react-router-dom";

const face = require("../../assets/face.png");
const flag = require("../../assets/flag.png");
const logo = require("../../assets/logo.png");
const { Header, Sider, Content, Footer } = Layout;
const dropDownMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/">Logout</Link>
    </Menu.Item>
  </Menu>
);

class Cockpit extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      collapsedWidth: "80"
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  brokenCollapsedWidth = () => {
    this.setState({
      collapsedWidth: "0"
    });
  };

  render() {
    const active = this.props.active;
    return (
      <Layout className="cockpit">
        {/* ~~~~~~~~~~~Header~~~~~~~~~~~ */}

        <Header className="header">
          <div className="header-top">
            <div className="header-left">
              <div className="trigger">
                <Icon
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                  height="100px"
                />
              </div>
              <img src={logo} alt="Logo" width="55px" />
            </div>
            <div type="flex" justify="space-around">
              <div className="header-right">
                <h3>
                  <i className="far fa-bell" />
                </h3>
                <img src={flag} alt="" width="25px" height="25px" />
                <h3>Hi, guest</h3>
                <Dropdown overlay={dropDownMenu} placement="bottomCenter">
                  <img src={face} alt="" width="25px" height="25px" />
                </Dropdown>
              </div>
            </div>
          </div>
        </Header>
        <Layout>
          {/* ~~~~~~~~~~~Sider~~~~~~~~~~~ */}

          <Sider
            className="sider"
            width="220px"
            theme="light"
            breakpoint="sm"
            onBreakpoint={broken => {
              if (broken) this.brokenCollapsedWidth();
            }}
            collapsedWidth={this.state.collapsedWidth}
            collapsed={this.state.collapsed}
            onCollapse={this.toggle}
            trigger={null}
          >
            <Menu
              className="sider-menu"
              theme="light"
              mode="inline"
              defaultSelectedKeys={[active]}
            >
              <Menu.Item key="1">
                <Link to="/dashboard">
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/users">
                  <Icon type="user" />
                  <span>Users</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/factories">
                  <Icon type="tool" />
                  <span>Factories</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link to="/projects">
                  <Icon type="project" />
                  <span>Projects</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="5">
                <Link to="/products">
                  <Icon type="shopping-cart" />
                  <span>Products</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>

          {/* ~~~~~~~~~~~Content~~~~~~~~~~~ */}

          <Content className="cockpit-content">{this.props.content}</Content>
        </Layout>

        {/* ~~~~~~~~~~~Footer~~~~~~~~~~~ */}

        <Footer className="footer">GeekyAnts ©2018 Created by Ants</Footer>
      </Layout>
    );
  }
}

export default Cockpit;
