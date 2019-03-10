import React from 'react';
import PropTypes from 'prop-types';
import ReactApexCharts from 'react-apexcharts';

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

const AverageRatings = ({ ratingsData, ratingsCount }) => {
  const options = {
    colors,
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
        distributed: true,
        colors: {
          backgroundBarOpacity: 1,
        },
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
    title: {
      text: 'Ratings per Stars',
      floating: true,
      align: 'center',
      style: {
        color: '#ffffff',
      },
    },
    tooltip: {
      x: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    chart: {
      toolbar: {
        tools: {
          download: false,
        },
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

export default AverageRatings;
