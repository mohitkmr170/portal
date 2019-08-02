import React, { Component } from "react";
import { Table } from "antd";

const data = [
  {
    key: "0",
    ProjectTitle: "jkdasbdu2347234bh2j348",
    Location: "Test User 1",
    Manager: "Test User",
    Product: "01/02/2019",
    Tags: "10000",
    Time: "Cr",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "1",
    ProjectTitle: "jkdasbdu2347234bh2j348",
    Location: "Test User 1",
    Manager: "Test User",
    Product: "01/02/2019",
    Tags: "5000",
    Time: "Dr",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "2",
    ProjectTitle: "jkdasbdu2347234bh2j348",
    Location: "Test User 1",
    Manager: "Test User",
    Product: "01/02/2019",
    Tags: "10000",
    Time: "Dr",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "3",
    ProjectTitle: "jkdasbdu2347234bh2j348",
    Location: "Test User 1",
    Manager: "Test User",
    Product: "01/02/2019",
    Tags: "10000",
    Time: "Cr",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "4",
    ProjectTitle: "jkdasbdu2347234bh2j348",
    Location: "Test User 1",
    Manager: "Test User",
    Product: "01/02/2019",
    Tags: "5000",
    Time: "Cr",
    Machines: "100",
    Ratings: "100"
  },
  {
    key: "5",
    ProjectTitle: "jkdasbdu2347234bh2j348",
    Location: "Test User 1",
    Manager: "Test User",
    Product: "01/02/2019",
    Tags: "10000",
    Time: "Cr",
    Machines: "100",
    Ratings: "100"
  }
];

class Table1 extends Component {
  render() {
    const columns = [
      {
        title: "Transaction ID",
        dataIndex: "ProjectTitle",
        key: "Project Title"
      },
      { title: "Payer", dataIndex: "Location", key: "Location" },
      { title: "Payee", dataIndex: "Manager", key: "Manager" },
      { title: "Time Stamp", dataIndex: "Product", key: "Product" },
      { title: "Amount", dataIndex: "Tags", key: "Tags" },
      { title: "Dr/Cr", dataIndex: "Time", key: "Time" }
    ];

    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered={true}
          // rowKey="Id"
        />
      </div>
    );
  }
}

export default Table1;
