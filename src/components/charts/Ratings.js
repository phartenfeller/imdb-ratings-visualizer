import React from 'react';
import PropTypes from 'prop-types';
import './Ratings.scss';

const Ratings = ({ ratings, ratingsCount }) => {
  const ratingsSum = ratings.reduce((a, b) => a + (b.rating || 0), 0);
  const average = (ratingsSum / ratingsCount).toFixed(1);

  return (
    <div className="chart-container">
      <div>
        <div className="key-description">Total Ratings</div>
        <div className="key-number">{ratingsCount}</div>
      </div>
      <div>
        <div className="key-description">Average Rating</div>
        <div className="key-number">{average}</div>
      </div>
    </div>
  );
};

Ratings.propTypes = {
  ratings: PropTypes.array,
  ratingsCount: PropTypes.number,
};

export default Ratings;
