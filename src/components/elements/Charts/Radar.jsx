import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Radar = () => {
  const config = {
    options: {
      chart: {
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      colors: ['#bf8e35'],
      labels: [
        'Engagement',
        'Leadership',
        'Burnout',
        'Commitment',
        'Social & Interpersonal',
        'Learning Culture',
        'Operational Effectiveness',
        'Innovation',
        'Strategy',
        'Decision Making',
        'Overall Health Score',
      ],
      stroke: {
        width: 1,
      },
      fill: {
        opacity: 0,
      },
      markers: {
        size: 2,
      },
    },
    series: [
      {
        name: 'ORG',
        data: [2, 4.3, 4.1, 4.0, 4.0, 4.1, 3.9, 4.0, 3.9, 3.4, 4.0],
      },
    ],
  };

  const code = JSON.stringify(config, null, 2);
  return (
    <div>
      <pre className="line-numbers">
        <code className="language-js">{code}</code>
      </pre>
      sssssss
      <ReactApexChart
        options={config.options}
        series={config.series}
        type="radar"
        height="550"
        width={600}
      />
    </div>
  );
};

export default Radar;
