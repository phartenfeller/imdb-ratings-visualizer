import React from 'react';

const RatingsTable = () => {
  const ratings = JSON.parse(sessionStorage.getItem('ratings'));

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

export default RatingsTable;
