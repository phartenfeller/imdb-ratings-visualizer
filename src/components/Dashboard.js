import React from 'react';
import PropTypes from 'prop-types';
import AverageRatings from './charts/AverageRatings';
import Ratings from './charts/Ratings';
import './Dashboard.scss';

const countOccurences = ratings => {
  const ratingsArray = ratings.map(rating => rating.rating);
  const counts = Array(10).fill(0);

  for (let i = 0; i < ratingsArray.length; i++) {
    const num = ratingsArray[i] - 1;
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  return counts;
};

const Dashboard = ({ ratings }) => {
  const ratingsCount = ratings.length;

  return (
    <div>
      <div className="main-component" style={{ height: '384px' }}>
        <Ratings ratings={ratings} ratingsCount={ratingsCount} />
        <AverageRatings
          ratingsData={countOccurences(ratings)}
          ratingsCount={ratingsCount}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  ratings: PropTypes.array,
};

export default Dashboard;
