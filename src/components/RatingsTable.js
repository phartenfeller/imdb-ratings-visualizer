import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import { Link } from 'react-router-dom';
import './RatingsTable.scss';
import getLinkWithIcon from '../util/getLinkWithIcon';

const RatingsTable = ({ ratings }) => {
  const columns = [
    {
      Header: '',
      accessor: 'url',
      Cell: ({ row }) => getLinkWithIcon(row.url),
      maxWidth: 64,
      className: 'cell-center',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Rating',
      accessor: 'rating',
      maxWidth: 150,
      className: 'cell-center',
    },
    {
      Header: 'Type',
      accessor: 'mediaType',
      maxWidth: 150,
      className: 'cell-center',
    },
    {
      Header: 'Rated',
      accessor: 'dateRatedString',
      maxWidth: 150,
      className: 'cell-center',
    },
    {
      Header: 'Year',
      accessor: 'year',
      maxWidth: 150,
      className: 'cell-center',
    },
  ];

  const defaultSorted = [
    {
      id: 'rating',
      desc: true,
    },
  ];

  return (
    <div className="main-component" style={{ padding: 40 }}>
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

const imdbLink = ({ url }) => {
  return <Link to={url}>Test</Link>;
};

imdbLink.propTypes = {
  url: PropTypes.string,
};

export default RatingsTable;
