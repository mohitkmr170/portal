import React, { Component } from "react";
import { Table } from "antd";

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
        title: "Project Title",
        dataIndex: "ProjectTitle",
        key: "Project Title"
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
