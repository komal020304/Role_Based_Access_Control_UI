// src/components/UserActivityChart.js
import React, { useRef, useEffect } from "react";
import { Chart as ChartJS } from "chart.js";

const UserActivityChart = ({ data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new ChartJS(chartRef.current, {
        type: "bar",
        data,
        options,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);

  return <canvas ref={chartRef} className="w-full h-full" />;
};

export default UserActivityChart;
