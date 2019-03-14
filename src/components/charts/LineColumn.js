import React from 'react';
import PropTypes from 'prop-types';
import ReactApexCharts from 'react-apexcharts';

const LineColumn = ({
  title,
  categories,
  columnName,
  columnData,
  lineName,
  lineData,
  height,
  width,
}) => {
  const options = {
    stroke: {
      width: [0, 4],
    },
    title: {
      text: title,
      floating: true,
      align: 'center',
      style: {
        color: '#ffffff',
      },
    },
    labels: categories,
    yaxis: [
      {
        title: {
          text: columnName,
        },
        decimalsInFloat: 0,
      },
      {
        opposite: true,
        title: {
          text: lineName,
        },
        decimalsInFloat: 1,
      },
    ],
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
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
      name: columnName,
      type: 'column',
      data: columnData,
    },
    {
      name: lineName,
      type: 'line',
      data: lineData,
    },
  ];

  return (
    <div className="chart-container">
      <ReactApexCharts
        series={series}
        options={options}
        type="line"
        height={height}
        width={width}
      />
    </div>
  );
};

LineColumn.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  columnName: PropTypes.string,
  columnData: PropTypes.array,
  lineName: PropTypes.string,
  lineData: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default LineColumn;
