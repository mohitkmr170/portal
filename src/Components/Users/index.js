import React, { Component } from "react";
import { Table, Button, Breadcrumb, Row, Col } from "antd";
import { Pie } from "ant-design-pro/lib/Charts";
import { Link } from "react-router-dom";
import firebase from "../../firebase.js";
import { currentId } from "../../decision.js";
import { withRouter } from "react-router-dom";
const face = require("../../assets/face.png");

class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    const userRef = firebase.database().ref("users");
    userRef.on("value", snapShot => {
      let users = snapShot.val();
      console.log("asjbdas", snapShot.val());
      let newState = [];
      for (let user in users) {
        newState.push({
          Id: user,
          Image: <img src={face} alt="face" width="40" />,
          Name: users[user].name,
          email: users[user].email
        });
      }
      this.setState({
        users: newState
      });
    });
  };

  render() {
    // debugger;
    // console.log("user db => ", this.state.users);
    const columns = [
      { title: "Image", dataIndex: "Image", key: "Image" },
      {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        Id: "Id",
        render: (text, index, rowKey) => {
          console.log(text, index, rowKey, index.Id, "testKet");
          return (
            <Link
              to={{
                pathname: `/users/${index.Id}`,
                state: {
                  userId: this.state.users[rowKey].Id
                }
              }}
            >
              {text}
            </Link>
          );
        }
      },

      { title: "email", dataIndex: "email", key: "email" }
      // {
      //   title: "Contributions",
      //   dataIndex: "Contributions",
      //   key: "Contributions"
      // },
      // { title: "Tags", dataIndex: "Tags", key: "Tags" },
      // { title: "Followers", dataIndex: "Followers", key: "Followers" },
      // { title: "Comments", dataIndex: "Comments", key: "Comments" },
      // { title: "Views", dataIndex: "Views", key: "Views" }
    ];

    return (
      <div>
        <div className="header-inner">
          <h3>Users</h3>
          <Breadcrumb className="bread">
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Users</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="content">
          <Table
            columns={columns}
            dataSource={this.state.users}
            pagination={true}
            bordered={true}
            rowKey="Id"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Table1);
