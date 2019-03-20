import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
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

  return (
    <div className="main-component">
      <Table
        data={ratings}
        columns={columns}
        defaultSorted={defaultSorted}
        defaultPageSize={50}
      />
    </div>
  );
};

RatingsTable.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsTable;
