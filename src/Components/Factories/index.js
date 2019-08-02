import React, { Component } from "react";
import { Table, Breadcrumb, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { Pie } from "ant-design-pro/lib/Charts";

const data = [
  {
    key: "0",
    Factory: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Employees: "100",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "1",
    Factory: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Employees: "100",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "2",
    Factory: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Employees: "100",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "3",
    Factory: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Employees: "100",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "4",
    Factory: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Employees: "100",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "5",
    Factory: "John Brown",
    Location: "New York No. 1 Lake Park",
    Manager: "John Brown",
    Product: "Book",
    Tags: "none",
    Employees: "100",
    Machines: "100",
    Ratings: "100"
  }
];

class Table1 extends Component {
  render() {
    const columns = [
      {
        title: "Factory",
        dataIndex: "Factory",
        key: "Factory",
        render: (text, index, rowKey) => (
          <Link to={`/factories/${rowKey}`}>{text}</Link>
        )
      },
      { title: "Location", dataIndex: "Location", key: "Location" },
      { title: "Manager", dataIndex: "Manager", key: "Manager" },
      { title: "Product", dataIndex: "Product", key: "Product" },
      { title: "Tags", dataIndex: "Tags", key: "Tags" },
      { title: "Employees", dataIndex: "Employees", key: "Employees" },
      { title: "Machines", dataIndex: "Machines", key: "Machines" },
      { title: "Ratings", dataIndex: "Ratings", key: "Ratings" }
    ];
    return (
      <div>
        {/* ~~~~~~~~~~~Top Breadcrumbs~~~~~~~~~~~ */}

        <div className="header-inner">
          <h3>Factories</h3>
          <Breadcrumb className="bread">
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Factories</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        {/* ~~~~~~~~~~~Pie Charts~~~~~~~~~~~ */}

        <div className="content">
          <Row gutter={16}>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={72} subTitle="Output" total="72%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={83} subTitle="Efficiency" total="83%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={9} subTitle="Wastage" total="9%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={58} subTitle="Cost" total="58%" />
            </Col>
            <Button
              type="secondary"
              href="mailto:ant@geekyants.com"
              className="btn-medium fr"
            >
              Mail Head of Factories
            </Button>
          </Row>

          {/* ~~~~~~~~~~~Table~~~~~~~~~~~ */}

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
