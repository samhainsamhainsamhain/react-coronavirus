import React, { useState } from "react";
import Chart from "kaktana-react-lightweight-charts";

export default function Chart1(props) {
  let arraymassive = [
    { time: "2020-10-10", value: 20 },
    { time: "2020 - 10 - 11", value: 5 },
    // { time: "2020 - 10 - 12", value: 12 },
    // { time: "2020 - 10 - 13", value: 25 },
    // { time: "2020 - 10 - 14", value: 76 },
    // { time: "2020 - 10 - 15", value: 12 },
  ];

  if (props.historicalData.cases !== undefined) {
    const dataKeys = Object.keys(props.historicalData.cases);
    const formattedDataKeys = dataKeys.map((key) => {
      let a = key.split("/").reverse();
      a[0] = "20" + a[0];

      let b = a[1];
      let c = a[2];
      if (c.length === 1) {
        c = "0" + c;
      }
      if (b.length === 1) {
        b = "0" + b;
      }
      a[1] = c;
      a[2] = b;

      return a.join("-");
    });
    const formattedDataValues = Object.values(props.historicalData.cases);

    for (let i = 0; i < formattedDataKeys.length; i++) {
      arraymassive.push({
        time: formattedDataKeys[i],
        value: formattedDataValues[i],
      });
    }
    console.log(arraymassive);
  }
  let chart;
  if (arraymassive.length > 1) {
    chart = {
      options: {
        alignLabels: true,
        timeScale: {
          legend: "Cases",
          rightOffset: 1,
          fixLeftEdge: true,
          lockVisibleTimeRangeOnResize: true,
          rightBarStaysOnScroll: true,
          borderVisible: true,
          borderColor: "#333333",
          visible: true,
          timeVisible: true,
          secondsVisible: false,
          topColor: "rgba(100, 100, 0, 0.5",
          bottomColor: "rgba(255, 221, 100, 1)",
          lineColor: "rgba(210, 146, 230, 1)",
        },
      },
      lineSeries: [
        {
          data: arraymassive,
        },
      ],
    };
  }

  // let arraymassive =  [
  //           { time: 2020 - 10 - 10, value: 20 },
  //           { time: 2020 - 10 - 11, value: 5 },
  //           { time: 2020 - 10 - 12, value: 12 },
  //           { time: 2020 - 10 - 13, value: 25 },
  //           { time: 2020 - 10 - 14, value: 76 },
  //           { time: 2020 - 10 - 15, value: 12 },
  // ]

  // let chart = {
  //   options: {
  //     alignLabels: true,
  //     timeScale: {
  //       rightOffset: 12,
  //       barSpacing: 3,
  //       fixLeftEdge: true,
  //       lockVisibleTimeRangeOnResize: true,
  //       rightBarStaysOnScroll: true,
  //       borderVisible: false,
  //       borderColor: "#fff000",
  //       visible: true,
  //       timeVisible: true,
  //       secondsVisible: false
  //     }
  //   },
  //   lineSeries: [{
  //     data: arraymassive
  //   }]
  // }

  const [state, setstate] = useState(chart);

  return (
    <div>
      {state && (
        <Chart
          options={chart.options}
          areaSeries={chart.lineSeries}
          autoWidth
          height={400}
        ></Chart>
      )}
    </div>
  );
}
