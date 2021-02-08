import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RadarCommune = () => {
  const { id } = useParams();
  const [config, setConfig] = useState({
    options: {
      chart: {
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      colors: ['#3399FF'],
      labels: [],
      stroke: {
        width: 1,
      },
      fill: {
        opacity: 0.5,
      },
      markers: {
        size: 2,
      },
    },
    series: [
      {
        name: 'Api APIDAE',
        data: [30, 50, 30, 50],
      },
    ],
  });

  useEffect(() => {
    axios
      .get(
        `https://regionsud-api-dev.woozy.fr/api/communes/${id}/tourismes/radar`,
      )
      .then((res) => {
        const labelChart = [];
        const numberChart = [];
        res.data.forEach((element) => {
          labelChart.push(element.name);
          numberChart.push(element.total);
        });

        setConfig({
          ...config,
          options: { labels: labelChart },
          series: [
            {
              name: 'ORG',
              data: numberChart,
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <ReactApexChart
        options={config.options}
        series={config.series}
        type="radar"
        height="400"
        width={400}
      />
    </div>
  );
};

export default RadarCommune;
