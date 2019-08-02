import React, { Component } from "react";
import { Row, Col, Layout, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import Table1 from "../Tables/table1";
import { Pie } from "ant-design-pro/lib/Charts";

const { Content } = Layout;

class viewUsers extends Component {
  render() {
    return (
      <Layout className="layout">
        <div className="header-inner">
          <h3>Factory Details</h3>
          <Breadcrumb className="bread">
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/factories">Factories</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>View Factory</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Content className="content">
          <Row gutter={16}>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={76} subTitle="Output" total="76%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={67} subTitle="Efficiency" total="67%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={15} subTitle="Wastage" total="15%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={24} subTitle="Cost" total="24%" />
            </Col>
            <Button
              type="secondary"
              href="mailto:ant@geekyants.com"
              style={{ float: "right" }}
            >
              Mail Factory Manager
            </Button>
          </Row>
          <div className="viewInfo">
            <h3>Factory Info</h3>
            <Row>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Name:</b> John Brown
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Location:</b> 23rd Street, New York
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Factory id:</b> 007
              </Col>
              <Col lg={{ span: 8, offset: 0 }}>
                <b>Estd.:</b> 2001
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
            <h3>Workers</h3>
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
