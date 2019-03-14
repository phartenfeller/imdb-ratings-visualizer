import React from 'react';
import PropTypes from 'prop-types';
import LineColumn from './LineColumn';

/**
 * Convert a year to it's decade
 * @param {Number} year
 * @return {Number}
 */
function yearToDecade(year) {
  return Math.floor(year / 10) * 10;
}

/**
 * returns decades for x-axis
 * @return {Array}
 */
function getDecades() {
  // earliest movie on imdb is from 1874 https://www.imdb.com/title/tt3155794/?ref_=ttls_li_tt
  const firstDecade = 1870;
  const now = new Date();
  const arr = [];

  for (let i = firstDecade; i <= yearToDecade(now.getFullYear()); i += 10) {
    arr.push(i);
  }

  return arr;
}

/**
 * Returns amount of Ratings and avg rating per decade
 * @param {Array} ratings
 * @param {Array} decades
 * @return {Array}
 */
function analysePerDecades(ratings, decades) {
  const amountDecades = decades.length;
  const counts = Array(amountDecades).fill(0);
  const avgRating = Array(amountDecades).fill(0);

  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i].rating;
    const decade = yearToDecade(ratings[i].year);
    const index = decades.indexOf(decade);
    counts[index] = counts[index] + 1;
    avgRating[index] = avgRating[index] + rating;
  }

  for (let i = 0; i < avgRating.length; i++) {
    avgRating[i] = avgRating[i]
      ? parseFloat((avgRating[i] / counts[i]).toFixed(1))
      : 0;
  }

  console.log('counts =>', counts);
  console.log('avgRating =>', avgRating);

  return [counts, avgRating];
}

const RatingsPerDecade = ({ ratings }) => {
  const decades = getDecades();
  console.log('decades =>', decades);
  const [counts, avgRating] = analysePerDecades(ratings, decades);

  return (
    <div>
      <LineColumn
        title="Ratings per Decade"
        categories={decades}
        columnName="Amount of Ratings"
        columnData={counts}
        lineName="Average Rating"
        lineData={avgRating}
        width={1200}
        height={378}
      />
    </div>
  );
};

RatingsPerDecade.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsPerDecade;
