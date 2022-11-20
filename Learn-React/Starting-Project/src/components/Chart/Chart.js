import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  console.log(props.dataPointValues);
  console.log(totalMaximum);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />);
      })}
    </div>
  );
}

export default Chart;
