import React, { Component } from "react";
import { Row, Col, Tabs, Table, Icon, Tooltip, Layout } from "antd";
import {
  TimelineChart,
  Bar,
  Pie,
  Radar,
  WaterWave,
  Gauge,
  yuan,
  ChartCard,
  Field,
  MiniArea,
  MiniBar,
  MiniProgress
} from "ant-design-pro/lib/Charts";
import Trend from "ant-design-pro/lib/Trend";
import numeral from "numeral";
import moment from "moment";

class DashboardComp extends Component {
  render() {
    return (
      <Layout
        style={{
          height: "100vh",
          width: "162vh",
          position: "fixed",
          backgroundColor: "#fff"
        }}
      >
        <div className="dashboard">DashBorad</div>
      </Layout>
    );
  }
}

export default DashboardComp;
