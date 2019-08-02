import React, { Component } from "react";
import { Table, Button, Breadcrumb, Row, Col } from "antd";
import { Pie } from "ant-design-pro/lib/Charts";
import { Link } from "react-router-dom";

const face = require("../../assets/face.png");
const data = [
  {
    Id: 0,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Test User",
    email: "abrown@xyz.com"
  },
  {
    Id: 1,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Test User",
    email: "abrown@xyz.com"
  },
  {
    Id: 2,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Test User",
    email: "abrown@xyz.com"
  },
  {
    Id: 3,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Test User",
    email: "abrown@xyz.com"
  },
  {
    Id: 4,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Test User",
    email: "abrown@xyz.com"
  },
  {
    Id: 5,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Test User",
    email: "abrown@xyz.com"
  }
];

class Table1 extends Component {
  render() {
    const columns = [
      { title: "Image", dataIndex: "Image", key: "Image" },
      {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        render: (text, index, rowKey) => (
          <Link to={`/users/${rowKey}`}>{text}</Link>
        )
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
            dataSource={data}
            pagination={false}
            bordered={true}
            rowKey="Id"
          />
        </div>
      </div>
    );
  }
}

export default Table1;
