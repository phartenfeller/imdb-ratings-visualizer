import React from 'react';
import PropTypes from 'prop-types';
import RatingsPerWeekday from './charts/RatingsPerWeekday';

const Time = ({ ratings }) => {
  return (
    <div className="main-component">
      Time...
      <RatingsPerWeekday ratings={ratings} />
    </div>
  );
};

Time.propTypes = {
  ratings: PropTypes.array,
};

export default Time;
