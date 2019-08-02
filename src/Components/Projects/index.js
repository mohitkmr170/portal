import React, { Component } from "react";
import { Table, Breadcrumb, Row, Col, Button } from "antd";
import { Pie } from "ant-design-pro/lib/Charts";

import { Link } from "react-router-dom";

const data = [
  {
    key: "0",
    ProjectTitle: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Time: "100 Days",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "1",
    ProjectTitle: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Time: "100 Days",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "2",
    ProjectTitle: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Time: "100 Days",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "3",
    ProjectTitle: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Time: "100 Days",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "4",
    ProjectTitle: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Time: "100 Days",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "5",
    ProjectTitle: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Time: "100 Days",
    Machines: "100",
    Ratings: "100"
  }
];

class Table1 extends Component {
  render() {
    const columns = [
      {
        title: "Project",
        dataIndex: "ProjectTitle",
        key: "Project Title",
        render: (text, index, rowKey) => (
          <Link to={`/projects/${rowKey}`}>{text}</Link>
        )
      },
      { title: "Location", dataIndex: "Location", key: "Location" },
      { title: "Manager", dataIndex: "Manager", key: "Manager" },
      { title: "Product", dataIndex: "Product", key: "Product" },
      { title: "Tags", dataIndex: "Tags", key: "Tags" },
      { title: "Time", dataIndex: "Time", key: "Time" },
      { title: "Machines", dataIndex: "Machines", key: "Machines" },
      { title: "Ratings", dataIndex: "Ratings", key: "Ratings" }
    ];

    return (
      <div>
        <div className="header-inner">
          <h3>Projects</h3>
          <Breadcrumb className="bread">
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Projects</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="content">
          <Row gutter={16}>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={30} subTitle="ROI" total="30%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={35} subTitle="CPI" total="35%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={17} subTitle="PV" total="17%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={34} subTitle="EV" total="34%" />
            </Col>
            <Button
              type="secondary"
              href="mailto:ant@geekyants.com"
              className="btn-medium fr"
            >
              Mail Head of Projects
            </Button>
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered={true}
          />
        </div>
      </div>
    );
  }
}

export default Table1;
