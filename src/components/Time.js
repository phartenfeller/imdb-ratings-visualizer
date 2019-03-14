import React from 'react';
import PropTypes from 'prop-types';
import RatingsPerWeekday from './charts/RatingsPerWeekday';
import RatingsPerYear from './charts/RatingsPerYear';
import RatingssPerDecade from './charts/RatingsPerDecade';

const Time = ({ ratings }) => {
  return (
    <div className="main-component">
      <RatingsPerWeekday ratings={ratings} />
      <RatingsPerYear ratings={ratings} />
      <RatingssPerDecade ratings={ratings} />
    </div>
  );
};

Time.propTypes = {
  ratings: PropTypes.array,
};

export default Time;
