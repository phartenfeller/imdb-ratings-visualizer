import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import './Table.scss';

const nextText = (
  <span>
    <span style={{ verticalAlign: 'middle' }}>Next</span>
    <i className="material-icons pagination-icon">keyboard_arrow_right</i>
  </span>
);

const previousText = (
  <span>
    <i className="material-icons pagination-icon left-pagination-icon">
      keyboard_arrow_left
    </i>
    <span>Previous</span>
  </span>
);

const Table = ({ data, columns, defaultSorted, defaultPageSize }) => {
  return (
    <ReactTable
      data={data}
      // resolveData={data => data.map(row => row)}
      columns={columns}
      className="-striped -highlight"
      defaultSorted={defaultSorted}
      defaultPageSize={defaultPageSize}
      pageSizeOptions={[5, 10, 15, 25, 50, 100, 250, 1000]}
      nextText={nextText}
      previousText={previousText}
      minRows={0}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  defaultSorted: PropTypes.array,
  defaultPageSize: PropTypes.number,
};

export default Table;
