import React, { Component } from "react";
import { Row, Col, Layout, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import Table1 from "../../Components/Tables/table1";
import { Pie } from "ant-design-pro/lib/Charts";

const { Content } = Layout;

class viewUsers extends Component {
  render() {
    return (
      <Layout className="layout">
        <div className="header-inner">
          <h3>Project Details Page</h3>
          <Breadcrumb className="bread">
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/projects">Projects</Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>View Project</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Content className="content">
          <div className="viewInfo">
            <Row gutter={16}>
              <Col lg={6} md={12} className="chartdivsm">
                <Pie percent={50} subTitle="ROI" total="50%" />
              </Col>
              <Col lg={6} md={12} className="chartdivsm">
                <Pie percent={95} subTitle="CPI" total="95%" />
              </Col>
              <Col lg={6} md={12} className="chartdivsm">
                <Pie percent={80} subTitle="PV" total="80%" />
              </Col>
              <Col lg={6} md={12} className="chartdivsm">
                <Pie percent={40} subTitle="EV" total="40%" />
              </Col>
              <Button
                type="secondary"
                href="mailto:ant@geekyants.com"
                style={{ float: "right" }}
              >
                Mail Project Manager
              </Button>
            </Row>
            <h3>User Info</h3>
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
