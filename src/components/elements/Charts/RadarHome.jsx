import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const RadarHome = () => {
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
        `${process.env.REACT_APP_REGIONSUD_API_URL}/communes/tourismes/radar`,
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
      <div className="mediumTitle">Nos data</div>
      <div>
        Ce prototype se propose de recourir à une pluralité de jeux de données
        en open data, disponibles sur la plateforme régionale DataSud, pour
        livrer une sorte de « carte d’identité » de chaque commune du
        territoire, incluant des informations pratiques, de contact, ainsi que
        des données disponibles sur différents champs, présentés dans le radar
        ci-dessous. D’autres pourront venir compléter ce « Wiki » territorial :
        crèches, écoles entreprises, lieux de coworking, faune et flore des
        parcs, pistes cyclables, … Plus la donnée est libérée, plus la
        connaissance du territoire grandit ; plus la donnée est qualifiée, plus
        la connaissance du territoire est juste ! La Région vous accompagne dans
        l’ouverture de vos données : écrivez à smartdata@maregionsud.fr
      </div>
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

export default RadarHome;
