import React from 'react';
import PropTypes from 'prop-types';
import AverageRatings from '../components/charts/AverageRatings';
import MainInfos from '../components/charts/MainInfos';

const countOccurences = ratings => {
  const ratingsArray = ratings.map(rating => rating.rating);

  const ratingsObject = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 0 },
    { x: 9, y: 0 },
    { x: 10, y: 0 },
  ];

  ratingsArray.map(rating => {
    return ratingsObject[rating - 1].y++;
  });

  return ratingsObject;
};

const Dashboard = ({ ratings }) => {
  const ratingsCount = ratings.length;

  return (
    <div className="m-10 flex">
      <div className="flex-1 w-1/2">
        <MainInfos ratings={ratings} ratingsCount={ratingsCount} />
      </div>
      <div className="flex-1 w-1/2 h-64">
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
