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

const BarChart = ({
  title,
  categories,
  data,
  dataCount,
  seriesName,
  height,
  width,
}) => {
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
        return Math.round((val / dataCount) * 100) + '%';
      },
      style: {
        fontSize: '12px',
        colors: ['#ffffff'],
      },
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors,
        },
      },
    },
    title: {
      text: title,
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
      name: seriesName,
      data: data,
    },
  ];

  return (
    <div className="chart-container">
      <ReactApexCharts
        options={options}
        series={series}
        type="bar"
        height={height}
        width={width}
      />
    </div>
  );
};

BarChart.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  data: PropTypes.array,
  dataCount: PropTypes.number,
  seriesName: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default BarChart;
