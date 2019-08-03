import React, { Component } from "react";
import { Row, Col, Button, Layout, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Table1 from "../../Components/Tables/table1";
import { Pie } from "ant-design-pro/lib/Charts";
import firebase from "../../firebase.js";
import { currentId } from "../../decision.js";
import { withRouter } from "react-router-dom";
import WrappedRegistrationForm from "../Users/editUserComp";

const { Content } = Layout;

let uid = "";
class viewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDate: {},
      edit: false
    };
  }

  componentDidMount = () => {
    console.log("adss", this.props.match.params.id);
    uid = this.props.match.params.id;
    let tempObj = {};
    const userRef = firebase.database().ref(`users/${uid}`);
    userRef.on("value", snapShot => {
      console.log("ajsbdka", snapShot.val());
      tempObj = snapShot.val();
    });
    this.setState({
      userDate: tempObj
    });
  };

  handleEdit = () => {
    this.setState({
      edit: true
    });
  };

  render() {
    const { userDate } = this.state;
    console.log("kansdkajs", userDate, this.props);
    // debugger;
    if (!this.state.edit)
      return (
        <Layout className="layout">
          <div className="header-inner">
            <h3>Basic Details Page</h3>
            <Breadcrumb className="bread">
              <Breadcrumb.Item>
                <Link to="/dashboard">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/users">Users</Link>
              </Breadcrumb.Item>

              <Breadcrumb.Item>View User</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Content className="content">
            <h3>
              User Info
              <Button
                type="secondary"
                htmlType="submit"
                className="btn-small fr"
                onClick={this.handleEdit}
              >
                Edit Details
              </Button>
            </h3>
            {/* <Row gutter={16}>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={50} subTitle="Attendance" total="50%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={95} subTitle="Efficiency" total="95%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={80} subTitle="Rating" total="80%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={40} subTitle="Cost" total="40%" />
            </Col>
          </Row> */}
            <div className="viewInfo">
              <Row>
                <Col lg={{ span: 8, offset: 0 }}>
                  <b>Name:</b> {userDate.name}
                </Col>
                <Col lg={{ span: 8, offset: 0 }}>
                  <b>Age:</b> {2019 - parseInt(userDate.dob)}
                </Col>
                <Col lg={{ span: 8, offset: 0 }}>
                  <b>Phone:</b> 9999999999
                </Col>
              </Row>
              {/* <hr />
            <h3>Contact Details</h3> */}
              <Row>
                <Col lg={{ span: 8, offset: 0 }}>
                  <b>User id:</b> {uid}
                </Col>
                <Col lg={{ span: 8, offset: 0 }}>
                  <b>Email:</b> {userDate.email}
                </Col>
              </Row>
              <hr />
              {/* <h3>Contributions</h3>
            <Row>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Projects:</b> 10
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Technologies:</b> React, Redux, JS
              </Col>
            </Row> */}
              {/* <hr /> */}

              <h3>Transaction Details</h3>

              <div>{uid && <Table1 userId={uid} />}</div>
            </div>
          </Content>
        </Layout>
      );
    else return <WrappedRegistrationForm userId={uid} />;
  }
}

export default withRouter(viewUsers);
