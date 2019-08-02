import React, { Component } from "react";
import { Table, Button, Breadcrumb, Row, Col } from "antd";
import { Pie } from "ant-design-pro/lib/Charts";
import { Link } from "react-router-dom";

const face = require("../../assets/face.png");
const data = [
  {
    Id: 0,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Angelina Brown",
    email: "abrown@xyz.com",
    Contributions: "239",
    Tags: "JS, React, Redux",
    Followers: "100",
    Comments: "100",
    Views: "100"
  },
  {
    Id: 1,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Angelina Brown",
    email: "abrown@xyz.com",
    Contributions: "239",
    Tags: "JS, React, Redux",
    Followers: "100",
    Comments: "100",
    Views: "100"
  },
  {
    Id: 2,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Angelina Brown",
    email: "abrown@xyz.com",
    Contributions: "239",
    Tags: "JS, React, Redux",
    Followers: "100",
    Comments: "100",
    Views: "100"
  },
  {
    Id: 3,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Angelina Brown",
    email: "abrown@xyz.com",
    Contributions: "239",
    Tags: "JS, React, Redux",
    Followers: "100",
    Comments: "100",
    Views: "100"
  },
  {
    Id: 4,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Angelina Brown",
    email: "abrown@xyz.com",
    Contributions: "239",
    Tags: "JS, React, Redux",
    Followers: "100",
    Comments: "100",
    Views: "100"
  },
  {
    Id: 5,
    Image: <img src={face} alt="face" width="40" />,
    Name: "Angelina Brown",
    email: "abrown@xyz.com",
    Contributions: "239",
    Tags: "JS, React, Redux",
    Followers: "100",
    Comments: "100",
    Views: "100"
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

      { title: "email", dataIndex: "email", key: "email" },
      {
        title: "Contributions",
        dataIndex: "Contributions",
        key: "Contributions"
      },
      { title: "Tags", dataIndex: "Tags", key: "Tags" },
      { title: "Followers", dataIndex: "Followers", key: "Followers" },
      { title: "Comments", dataIndex: "Comments", key: "Comments" },
      { title: "Views", dataIndex: "Views", key: "Views" }
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
          <Row gutter={16}>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={90} subTitle="Attendance" total="90%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={78} subTitle="Efficiency" total="78%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={70} subTitle="Rating" total="70%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={18} subTitle="Cost" total="18%" />
            </Col>
            <Button
              type="secondary"
              href="mailto:ant@geekyants.com"
              className="btn-medium fr"
            >
              Mail Head of HR
            </Button>
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered={true}
            rowKey="Id"
          />
          <Button type="secondary" htmlType="submit" className="btn-medium fr">
            <Link to="/users/add">Add New User</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Table1;
