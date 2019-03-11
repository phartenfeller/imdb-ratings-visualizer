import React from 'react';
import PropTypes from 'prop-types';
import AverageRatings from './charts/AverageRatings';
import './Dashboard.scss';

const countOccurences = ratings => {
  const ratingsArray = ratings.map(rating => rating.rating);
  const counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  };

  for (let i = 0; i < ratingsArray.length; i++) {
    const num = ratingsArray[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  console.log(counts);

  const arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(counts[i]);
  }

  console.log(arr);
  return arr;
};

const Dashboard = ({ ratings }) => {
  const ratingsCount = ratings.length;

  return (
    <div>
      <div className="main-component">
        Dashboard...
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
