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
      accessor: 'titleType',
    },
    {
      Header: 'Date Rated',
      accessor: 'dateRated',
    },
    {
      Header: 'Genres',
      accessor: 'genres',
    },
  ];

  return (
    <ReactTable
      data={ratings}
      // resolveData={data => data.map(row => row)}
      columns={columns}
      className="-striped -highlight"
    />
  );
};

RatingsTable.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsTable;
