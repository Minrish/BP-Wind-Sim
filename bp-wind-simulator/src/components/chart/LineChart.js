import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";

function LineChart() {
  const { Title } = Typography;

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Power Curve</Title>

        </div>
        <div className="Power">
          <ul>
            <li>{<MinusOutlined />} Reference</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default LineChart;
