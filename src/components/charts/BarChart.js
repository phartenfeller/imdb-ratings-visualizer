import React from 'react';
import PropTypes from 'prop-types';
import ReactApexCharts from 'react-apexcharts';

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
    colors: ['#FFEE70'],
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
      offsetY: -22,
      enabled: true,
      formatter: val => {
        return Math.round((val / dataCount) * 100) + '%';
      },
      style: {
        fontSize: '12px',
        colors: undefined,
      },
    },
    xaxis: {
      categories,
      labels: {},
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 100],
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
      theme: 'dark',
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
