import React, { Component } from "react";
import { Table } from "antd";
import firebase from "../../firebase.js";
import Workbook from "react-excel-workbook";
import moment from "moment";

let data = [];

class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionList: []
    };
  }

  componentDidMount = async () => {
    let arr = [];
    let transactionList = [];
    const userRef = firebase.database().ref(`users/${this.props.userId}`);
    userRef.on("value", snap => {
      transactionList = snap.val().transactionList;
    });
    console.log("jahvdas", transactionList);
    const tList = firebase.database().ref("transactions/");
    tList.on("value", snap => {
      let newState = [];
      let list = snap.val();
      for (let user in list) {
        let obj = {
          id: user,
          time: list[user].timeStamp,
          amount: list[user].amount,
          sender: list[user].sender,
          type: list[user].type
        };
        console.log("ajsdkas", user);
        list.id = user;
        if (transactionList.includes(user)) newState.push(obj);
      }
      console.log("ajsbdas", newState);
      this.setState({
        transactionList: newState
      });
    });
  };

  render() {
    console.log("aefasd", this.state);
    data = [];
    console.log("ajsndas", this.state.transactionList);
    this.state.transactionList.map((item, index) => {
      data.push({
        key: index,
        ProjectTitle: item.id,
        Location: "Test User 1",
        Manager:
          item.type === "add"
            ? "Self"
            : item.sender === this.props.userId
            ? ""
            : item.sender,
        Product: moment(item.time).format("LLLL"),
        Tags: (
          <div
            style={{
              flex: 1,
              textAlign: "center"
            }}
          >
            {parseFloat(item.amount).toFixed(2)}
          </div>
        ),
        Tagss: parseFloat(item.amount).toFixed(2),
        Time: item.sender === this.props.userId ? "Dr" : "Cr",
        Machines: "100",
        Ratings: "100"
      });
    });
    console.log("asdjas", data);
    const columns = [
      {
        title: "Transaction ID",
        dataIndex: "ProjectTitle",
        key: "Project Title"
      },
      // { title: "Payer", dataIndex: "Location", key: "Location" },
      { title: "Payee", dataIndex: "Manager", key: "Manager" },
      { title: "Time Stamp", dataIndex: "Product", key: "Product" },
      { title: "Amount", dataIndex: "Tagss", key: "Tags" },
      { title: "Dr/Cr", dataIndex: "Time", key: "Time" }
    ];

    return (
      <div style={{ paddingBottom: "5rem" }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={true}
          bordered={true}
          // rowKey="Id"
        />
        <div
          className="row text-center"
          style={{ marginTop: "30px", paddingHorizontal: 20 }}
        >
          <Workbook
            filename="transaction.xlsx"
            element={
              <button
                style={{
                  backgroundColor: "#2D92F9",
                  color: "#fff",
                  padding: 8,
                  borderRadius: 8,
                  fontSize: 18
                }}
              >
                Download Document
              </button>
            }
          >
            <Workbook.Sheet data={data} name="Transaction Details">
              <Workbook.Column
                label="Transaction ID        "
                value="ProjectTitle"
              />
              <Workbook.Column label="Amount" value="Tagss" />
              <Workbook.Column label="Sender" value="Manager" />
              <Workbook.Column label="Time" value="Product" />
              <Workbook.Column label="Dr/Cr" value="Time" />
            </Workbook.Sheet>
          </Workbook>
        </div>
      </div>
    );
  }
}

export default Table1;
