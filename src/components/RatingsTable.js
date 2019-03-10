import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import './RatingsTable.scss';

const RatingsTable = ({ ratings }) => {
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Rating',
      accessor: 'rating',
    },
    {
      Header: 'Type',
      accessor: 'mediaType',
    },
    {
      Header: 'Date Rated',
      accessor: 'dateRatedString',
    },
    {
      Header: 'Genres',
      accessor: 'genres',
    },
  ];

  const defaultSorted = [
    {
      id: 'rating',
      desc: true,
    },
  ];

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

  return (
    <ReactTable
      data={ratings}
      // resolveData={data => data.map(row => row)}
      columns={columns}
      className="-striped -highlight main-component"
      defaultSorted={defaultSorted}
      defaultPageSize={50}
      pageSizeOptions={[5, 10, 20, 25, 50, 100, 250, 1000]}
      nextText={nextText}
      previousText={previousText}
      minRows={0}
    />
  );
};

RatingsTable.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsTable;
