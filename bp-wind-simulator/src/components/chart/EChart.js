import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";

function EChart() {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: "2,541",
      user: "Today",
    },
    {
      Title: "18,637",
      user: "MTD",
    },
    {
      Title: "3,887,508",
      user: "YTD",
    },
    {
      Title: "100.0",
      user: "Avail. reference, %",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Hourly production for current day (kWh)</Title>
        <Paragraph className="lastweek">
          Hourly Production
        </Paragraph>
        <Paragraph className="lastweek">
          Productivty (Produced energy, kWh)
        </Paragraph>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
