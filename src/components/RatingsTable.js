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
      Next <i className="material-icons">keyboard_arrow_right</i>
    </span>
  );

  return (
    <ReactTable
      data={ratings}
      // resolveData={data => data.map(row => row)}
      columns={columns}
      className="-striped -highlight"
      defaultSorted={defaultSorted}
      pageSize={50}
      nextText={nextText}
    />
  );
};

RatingsTable.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsTable;
