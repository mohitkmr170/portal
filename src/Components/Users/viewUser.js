import React, { Component } from "react";
import { Row, Col, Button, Layout, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Table1 from "../../Components/Tables/table1";
import { Pie } from "ant-design-pro/lib/Charts";

const { Content } = Layout;

class viewUsers extends Component {
  render() {
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
          <Row gutter={16}>
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
          </Row>
          <div className="viewInfo">
            <h3>
              User Info
              <Button
                type="secondary"
                htmlType="submit"
                className="btn-small fr"
              >
                <Link to="/users/edit">Edit Details</Link>
              </Button>
            </h3>
            <Row>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Name:</b> John Brown
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Age:</b> 33
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>User id:</b> 007
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Works at:</b> ABB
              </Col>
            </Row>
            <hr />
            <h3>Contact Details</h3>
            <Row>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Address:</b> 23rd Street, New York
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Phone:</b> 007007007
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Email:</b> jb@xyz.com
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Fax:</b> 001001001
              </Col>
            </Row>
            <hr />
            <h3>Contributions</h3>
            <Row>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Projects:</b> 10
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Technologies:</b> React, Redux, JS
              </Col>
            </Row>
            <hr />

            <h3>Projects Worked</h3>
            <div>
              <Table1 />
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default viewUsers;
