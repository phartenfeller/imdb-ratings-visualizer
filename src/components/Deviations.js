import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import getLinkWithIcon from '../util/getLinkWithIcon';
import getSpanWithTooltip from '../util/getSpanWithTooltip';
import './Deviations.scss';

/**
 * Splits deviations to negatives and positives and sorts them
 * @param {Array} ratings
 * @return {Array} positives and negatives
 */
function splitAndSort(ratings) {
  const positives = ratings.filter(rating => {
    return rating.deviation > 0;
  });

  const negatives = ratings.filter(rating => {
    return rating.deviation < 0;
  });

  // sort highest deviation first
  positives.sort((a, b) => b.deviation - a.deviation);
  negatives.sort((a, b) => a.deviation - b.deviation);

  return [positives, negatives];
}

const Deviation = ({ ratings }) => {
  const [positives, negatives] = splitAndSort(ratings);
  console.log('positives =>', positives);
  console.log('negatives =>', negatives);

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
      Cell: ({ row }) => getSpanWithTooltip(row.title),
    },
    {
      Header: 'Rating',
      accessor: 'rating',
      maxWidth: 100,
      className: 'cell-center',
    },
    {
      Header: 'IMDb',
      accessor: 'imdbRating',
      maxWidth: 100,
      className: 'cell-center',
    },
    {
      Header: 'Deviation',
      accessor: 'deviation',
      maxWidth: 100,
      className: 'cell-center',
    },
  ];

  return (
    <div className="main-component">
      <div style={{ display: 'flex' }}>
        <div className="deviation-table">
          <h3>Positive</h3>
          <Table data={positives} columns={columns} defaultPageSize={15} />
        </div>
        <div className="deviation-table">
          <h3>Negative</h3>
          <Table data={negatives} columns={columns} defaultPageSize={15} />
        </div>
      </div>
    </div>
  );
};

Deviation.propTypes = {
  ratings: PropTypes.array,
};

export default Deviation;
