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
        title: "Product",
        dataIndex: "ProjectTitle",
        key: "Project Title",
        render: (text, index, rowKey) => (
          <Link to={`/products/${rowKey}`}>{text}</Link>
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
          <h3>Products</h3>
          <Breadcrumb className="bread">
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="content">
          <Row gutter={16}>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={50} subTitle="Profit" total="50%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={95} subTitle="Production Cost" total="95%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={80} subTitle="Growth" total="80%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={40} subTitle="ROI" total="40%" />
            </Col>
            <Button
              type="secondary"
              href="mailto:ant@geekyants.com"
              className="btn-medium fr"
            >
              Mail Head of Products
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
