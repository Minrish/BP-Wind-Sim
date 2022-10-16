import {
  Card,
  Col,
  Row,
  Typography,
  Progress,
  Button,

} from "antd";

import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";
export default function Home() {
  const { Title } = Typography;

  const count = [
    {
      today: "Wind Speed",
      title: "7.8 m/s",
    },
    {
      today: "Power",
      title: "10,368 kW",
    },
    {
      today: "Total Output",
      title: "31 %",
    },
    {
      today: "Predicted Daily Production",
      persent: "88,626 kWh",
    },
    {
      today: "Reactive Power",
      persent: "-55,260.49 VAr",
    },
    {
      today: "Moment",
      persent: "N/A",
    },
    {
      today: "Torque",
      persent: "N/A",
    },
    {
      today: "Life Cycle Load",
      persent: "N/A",
    }
  ];

  const list = [
    {
      Title: "Wake Dedicit Model",
      status: "In-scope",
      progress: <Progress percent={"?"} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <h1>Shuaipeng</h1>
        </div>
      ),
    },
    {
      Title: "Deflection Model",
      status: "In-scope",
      progress: <Progress percent={"?"} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <h1>David</h1>
        </div>
      ),
    },
    {
      Title: "Turbulence Model",
      status: "In-scope",
      progress: <Progress percent={"80"} size="small" status="active" />,
      member: (
        <div className="avatar-group mt-2">
          <h1>Bert</h1>
        </div>
      ),
    },
    {
      Title: "Superposition Model",
      status: "In-scope",
      progress: <Progress percent={"?"} size="small" status="active" />,
      member: (
        <div className="avatar-group mt-2">
          <h1>Seyi</h1>
        </div>
      ),
    },
    {
      Title: "Rotor AVG Model",
      status: "Out-of-scope",
      progress: <Progress percent={"?"} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <h1>Nelloe</h1>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[5, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={5}
              xl={5}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={180}>
                      <span>{c.today}</span>
                      <Title level={2}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Echart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={16} className="mb-24">
            <Card bordered={false} className="criclebox cardbody h-full">
              <div className="project-ant">
                <div>
                  <Title level={5}>PyWake Models</Title>
                  <Paragraph className="lastweek">
                    Work Distribution
                  </Paragraph>
                </div>
                {/* <div className="ant-filtertabs">
                  <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value="a">ALL</Radio.Button>
                      <Radio.Button value="b">ONLINE</Radio.Button>
                      <Radio.Button value="c">STORES</Radio.Button>
                    </Radio.Group>
                  </div>
                </div> */}
              </div>
              <div className="ant-list-box table-responsive">
                <table className="width-100">
                  <thead>
                    <tr>
                      <th>MODELS</th>
                      <th>RESEARCHERS</th>
                      <th>STATUS</th>
                      <th>COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />{" "}
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.status}{" "}
                          </span>
                        </td>
                        <td>
                          <div className="percent-progress">{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="demo-box">
                <Title level={5}>PyWake Demo</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  Using data from Flat Ridge 2 
                </Paragraph>
                <iframe title="Flat Ridge 2 Jupyter Notebook" src="Flat Ridge 2.html"></iframe>
                  
                {/* Anchor link */}
                <a href="https://github.com/Minrish/BP-Wind-Sim" target="_blank" rel="noreferrer">
                  <Button
                    type="primary"
                    className="width-100"
                  >RUN</Button>
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

