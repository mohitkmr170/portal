import React, { Component } from "react";
import { Row, Col, Tabs, Table, Icon, Tooltip } from "antd";
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

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
      "YYYY-MM-DD"
    ),
    y: Math.floor(Math.random() * 100) + 10
  });
}

const chartData = [];
for (let i = 0; i < 20; i += 1) {
  chartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 1000,
    y2: Math.floor(Math.random() * 100) + 900
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `Month ${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 200
  });
}

const visitData2 = [
  {
    x: "2017-09-01",
    y: 100
  },
  {
    x: "2017-09-02",
    y: 120
  },
  {
    x: "2017-09-03",
    y: 88
  },
  {
    x: "2017-09-04",
    y: 65
  }
];

const salesPieData = [
  {
    x: "India",
    y: 4544
  },
  {
    x: "China",
    y: 3321
  },
  {
    x: "USA",
    y: 3113
  },
  {
    x: "Canada",
    y: 2341
  },
  {
    x: "EU",
    y: 1231
  },
  {
    x: "Arab",
    y: 1231
  }
];

const radarOriginData = [
  {
    name: "Power",
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7
  },
  {
    name: "Chemicals",
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1
  },
  {
    name: "Metals",
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7
  }
];

const radarData = [];
const radarTitleMap = {
  ref: "India",
  koubei: "China",
  output: "USA",
  contribute: "Europe",
  hot: "Middle East"
};
radarOriginData.forEach(item => {
  Object.keys(item).forEach(key => {
    if (key !== "name") {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key]
      });
    }
  });
});

const columns1 = [
  {
    title: "Rank",
    dataIndex: "rank"
  },
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Project",
    dataIndex: "project"
  }
];
const data1 = [
  {
    key: "1",
    rank: "1",
    name: "Elon Musk",
    project: "Space"
  },
  {
    key: "2",
    rank: "2",

    name: "Newton",
    project: "Machinery"
  },
  {
    key: "3",
    rank: "3",

    name: "Albert Einstein",
    project: "Nuclear"
  },
  {
    key: "4",
    rank: "4",

    name: "Tesla",
    project: "Energy"
  },
  {
    key: "5",
    rank: "5",

    name: "Faraday",
    project: "Wind"
  }
];

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class DashboardComp extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="gutter-example">
          <Row gutter={16}>
            <Col lg={6}>
              <ChartCard
                title="Production Efficiency"
                action={
                  <Tooltip title="Factory output and Efficiency">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total="78%"
                footer={
                  <div>
                    <span>
                      Produced
                      <Trend
                        flag="up"
                        style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                      >
                        12%
                      </Trend>
                    </span>
                    <span style={{ marginLeft: 16 }}>
                      Waste
                      <Trend
                        flag="down"
                        style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                      >
                        11%
                      </Trend>
                    </span>
                  </div>
                }
                contentHeight={46}
              >
                <MiniProgress percent={78} strokeWidth={8} target={80} />
              </ChartCard>
            </Col>
            <Col className="gutter-row" lg={6}>
              <ChartCard
                title="Output/Hour"
                action={
                  <Tooltip title="Output/Hour">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(8846).format("0,0")}
                footer={
                  <Field label="Reject" value={numeral(234).format("0,0")} />
                }
                contentHeight={46}
              >
                <MiniArea line height={45} data={visitData} />
              </ChartCard>
            </Col>
            <Col className="gutter-row" lg={6}>
              <ChartCard
                title="Reject Materials"
                action={
                  <Tooltip title="Efficiency calculated per hour">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(398).format("0,0")}
                footer={
                  <Field label="Loss" value={numeral(1234).format("0,0")} />
                }
                contentHeight={46}
              >
                <MiniBar height={46} data={visitData} />
              </ChartCard>
            </Col>
            <Col className="gutter-row" lg={6}>
              <ChartCard
                title="Total Revenue"
                action={
                  <Tooltip title="Total revenue after calculation">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={() => (
                  <span dangerouslySetInnerHTML={{ __html: yuan(126560) }} />
                )}
                footer={
                  <Field
                    label="Investment"
                    value={numeral(12423).format("0,0")}
                  />
                }
                contentHeight={46}
              >
                <span>
                  Gain
                  <Trend
                    flag="up"
                    style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                  >
                    12%
                  </Trend>
                </span>
                <span style={{ marginLeft: 16 }}>
                  Loss
                  <Trend
                    flag="down"
                    style={{ marginLeft: 8, color: "rgba(0,0,0,.85)" }}
                  >
                    11%
                  </Trend>
                </span>
              </ChartCard>
            </Col>
          </Row>
        </div>

        <ChartCard title="Production Information" className="middle-spacing">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Metals" key="2">
              <Row gutter={16}>
                <Col lg={16}>
                  <Bar height={250} title="Peformance/Time" data={salesData} />
                </Col>
                <Col lg={8}>
                  <div>
                    <h4>Top Performers</h4>
                    <Table columns={columns1} dataSource={data1} size="small" />
                  </div>
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Space" key="3">
              <Row gutter={16}>
                <Col lg={16}>
                  <Bar height={250} title="Peformance/Time" data={salesData} />
                </Col>
                <Col lg={8}>
                  <div>
                    <h4>Top Performers</h4>
                    <Table columns={columns1} dataSource={data1} size="small" />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Energy" key="4">
              <Row gutter={16}>
                <Col lg={16}>
                  <Bar height={250} title="Peformance/Time" data={salesData} />
                </Col>
                <Col lg={8}>
                  <div>
                    <h4>Top Performers</h4>
                    <Table columns={columns1} dataSource={data1} size="small" />
                  </div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </ChartCard>

        <Row gutter={16} className="middle-spacing">
          <Col lg={12}>
            <ChartCard title="Top Selling">
              <Row gutter={16}>
                <Col md={12}>
                  <ChartCard
                    title="Infrastructure"
                    action={
                      <Tooltip title="Infrastructure">
                        <Icon type="info-circle-o" />
                      </Tooltip>
                    }
                    total={numeral(10046).format("0,0")}
                    contentHeight={46}
                  >
                    <MiniArea line height={45} data={visitData} />
                  </ChartCard>
                </Col>
                <Col md={12}>
                  <ChartCard
                    title="Energy"
                    action={
                      <Tooltip title="Energy">
                        <Icon type="info-circle-o" />
                      </Tooltip>
                    }
                    total={numeral(246).format("0,0")}
                    contentHeight={46}
                  >
                    <MiniArea line height={45} data={visitData} />
                  </ChartCard>
                </Col>
              </Row>
              <Table
                columns={columns1}
                dataSource={data1}
                size="small"
                className="middle-spacing"
              />
            </ChartCard>
          </Col>
          <Col lg={12}>
            <ChartCard title="Proportion of Sales">
              <div className="chartdiv">
                <Pie
                  hasLegend
                  title="Sales"
                  subTitle="Sales"
                  total={() => (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: yuan(
                          salesPieData.reduce((pre, now) => now.y + pre, 0)
                        )
                      }}
                    />
                  )}
                  data={salesPieData}
                  valueFormat={val => (
                    <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />
                  )}
                />
              </div>
            </ChartCard>
          </Col>
        </Row>

        <ChartCard title="Competitor Analysis" className="middle-spacing">
          <Row gutter={16}>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={99} subTitle="Metal" total="99%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={58} subTitle="Cement" total="58%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={78} subTitle="Energy" total="78%" />
            </Col>
            <Col lg={6} md={12} className="chartdivsm">
              <Pie percent={8} subTitle="Solar" total="8%" />
            </Col>
          </Row>
          <div className="chartdiv">
            <TimelineChart
              data={chartData}
              titleMap={{ y1: "Indian ", y2: "Chinese" }}
            />
          </div>
        </ChartCard>
        <ChartCard title="Monthly Production Rates" className="middle-spacing">
          <div className="chartdiv">
            <Bar title="Sales Data" data={salesData} />
          </div>
        </ChartCard>

        <Row gutter={16} className="middle-spacing">
          <Col lg={12}>
            <ChartCard
              title="Factory Operation Cost"
              action={
                <Tooltip title="Payments reflect the quality of transaction">
                  <Icon type="exclamation-circle-o" />
                </Tooltip>
              }
              total="6,500"
              contentHeight={150}
            >
              <MiniBar data={visitData2} />
            </ChartCard>
          </Col>
          <Col lg={12}>
            <ChartCard
              title="Employee Cost"
              action={
                <Tooltip title="Payments reflect the quality of transaction">
                  <Icon type="exclamation-circle-o" />
                </Tooltip>
              }
              total="9,500"
              contentHeight={150}
            >
              <MiniBar data={visitData2} />
            </ChartCard>
          </Col>
        </Row>
        <Row gutter={16} className="middle-spacing">
          <Col lg={12}>
            <ChartCard title="National Sales Data">
              <Pie
                hasLegend
                title="Sales"
                subTitle="Sales"
                total={() => (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: yuan(
                        salesPieData.reduce((pre, now) => now.y + pre, 0)
                      )
                    }}
                  />
                )}
                data={salesPieData}
                valueFormat={val => (
                  <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />
                )}
              />
              <Table columns={columns1} dataSource={data1} size="small" />
            </ChartCard>
          </Col>
          <Col lg={12}>
            <ChartCard title="Revenue and Profit by Region">
              <Radar hasLegend data={radarData} />
              <Table columns={columns1} dataSource={data1} size="small" />
            </ChartCard>
          </Col>
        </Row>
        <Row gutter={16} className="middle-spacing">
          <Col lg={6}>
            <ChartCard title="Stock Prices">
              <div className="chartdivsm">
                <WaterWave title="Stocks" percent={74} />
              </div>
            </ChartCard>
          </Col>
          <Col lg={6}>
            <ChartCard title="Production Speed">
              <div className="chartdivsm">
                <Gauge title="Speed" percent={87} />
              </div>
            </ChartCard>
          </Col>
          <Col lg={12}>
            <ChartCard
              title="Output/Hour"
              action={
                <Tooltip title="Output/Hour">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(8846).format("0,0")}
              footer={
                <Field label="Reject" value={numeral(234).format("0,0")} />
              }
              contentHeight={46}
            >
              <MiniArea line height={45} data={visitData} />
            </ChartCard>
          </Col>
          <Col lg={12}>
            <ChartCard
              title="Reject Materials"
              action={
                <Tooltip title="Efficiency calculated per hour">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={numeral(398).format("0,0")}
              footer={
                <Field label="Loss" value={numeral(1234).format("0,0")} />
              }
              contentHeight={46}
            >
              <MiniBar height={46} data={visitData} />
            </ChartCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardComp;
