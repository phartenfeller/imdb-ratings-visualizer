import React from 'react';
import PropTypes from 'prop-types';
import BarChart from './BarChart';

const countOccurences = (ratings, years) => {
  const ratingsArray = ratings.map(rating => rating.dateRated.getFullYear());
  const counts = Array(years).fill(0);

  for (let i = 0; i < ratingsArray.length; i++) {
    const year = ratingsArray[i];
    const index = years.indexOf(year);
    counts[index] = counts[index] ? counts[index] + 1 : 1;
  }

  return counts;
};

/**
 * Returns years in which the user rated
 * @param {Array} ratings
 * @return {Array}
 */
function uniqueYears(ratings) {
  const unique = [
    ...new Set(ratings.map(rating => rating.dateRated.getFullYear())),
  ];
  unique.sort();
  return unique;
}

const RatingsPerYear = ({ ratings }) => {
  const ratingsCount = ratings.length;
  const ratedYears = uniqueYears(ratings);
  const yearsData = countOccurences(ratings, ratedYears);

  return (
    <BarChart
      title="Ratings per Year"
      categories={ratedYears}
      data={yearsData}
      dataCount={ratingsCount}
      seriesName="Year"
      width={600}
      height={350}
    />
  );
};

RatingsPerYear.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsPerYear;
