import React from 'react';
import PropTypes from 'prop-types';
import ReactApexCharts from 'react-apexcharts';
import './Dashboard.scss';

const colors = [
  '#FF355E',
  '#FD5B78',
  '#FF6037',
  '#FF9933',
  '#FFCC33',
  '#FFFF66',
  '#CCFF00',
  '#66FF66',
  '#50BFE6',
  '#FF00CC',
];

const countOccurences = ratings => {
  const ratingsArray = ratings.map(rating => rating.rating);
  const counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  };

  for (let i = 0; i < ratingsArray.length; i++) {
    const num = ratingsArray[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  console.log(counts);

  const arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(counts[i]);
  }

  console.log(arr);
  return arr;
};

const Dashboard = ({ ratings }) => {
  return (
    <div>
      <div className="main-component">
        Dashboard...
        <AverageRatings
          ratingsData={countOccurences(ratings)}
          ratingsCount={ratings.length}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  ratings: PropTypes.array,
};

const AverageRatings = ({ ratingsData, ratingsCount }) => {
  const options = {
    colors,
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: val => {
        return Math.round((val / ratingsCount) * 100) + '%';
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#ffffff'],
      },
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      labels: {
        style: {
          colors,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    // fill: {
    //   type: 'solid',
    //   colors,
    //   gradient: {
    //     shade: 'light',
    //     type: 'horizontal',
    //     shadeIntensity: 0.25,
    //     gradientToColors: undefined,
    //     inverseColors: true,
    //     opacityFrom: 1,
    //     opacityTo: 1,
    //     stops: [50, 0, 100, 100],
    //   },
    // },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    title: {
      text: 'Ratings per Stars',
      floating: true,
      align: 'center',
      style: {
        color: '#ffffff',
      },
    },
  };

  const series = [
    {
      name: 'Ratings',
      data: ratingsData,
    },
  ];

  return (
    <div className="chart-container">
      <ReactApexCharts
        options={options}
        series={series}
        type="bar"
        height="350"
        width="600"
      />
    </div>
  );
};

AverageRatings.propTypes = {
  ratingsData: PropTypes.array,
  ratingsCount: PropTypes.number,
};

export default Dashboard;
