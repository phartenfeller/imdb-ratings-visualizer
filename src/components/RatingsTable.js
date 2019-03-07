import React from 'react';
import PropTypes from 'prop-types';

const RatingsTable = ({ ratings }) => {
  return (
    <ul>
      {ratings.map(rating => {
        return (
          <li key={rating.id}>
            {rating.title}: {rating.rating}
          </li>
        );
      })}
    </ul>
  );
};

RatingsTable.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsTable;
