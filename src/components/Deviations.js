import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

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
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Your Rating',
      accessor: 'rating',
    },
    {
      Header: 'IMDb Rating',
      accessor: 'imdbRating',
    },
    {
      Header: 'Deviation',
      accessor: 'deviation',
    },
  ];

  return (
    <div className="main-component">
      <div style={{ float: 'left', width: '45%' }}>
        <h3>Positive</h3>
        <Table data={positives} columns={columns} defaultPageSize={15} />
      </div>
      <div style={{ float: 'right', width: '45%' }}>
        <h3>Negative</h3>
        <Table data={negatives} columns={columns} defaultPageSize={15} />
      </div>
    </div>
  );
};

Deviation.propTypes = {
  ratings: PropTypes.array,
};

export default Deviation;
