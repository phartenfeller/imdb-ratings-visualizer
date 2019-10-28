import React from 'react';
import PropTypes from 'prop-types';

/**
 * Get average, public average and days watched
 * @param {Array} ratings
 * @param {Number} ratingsCount
 * @return {Array} average, puAverage, daysWatched
 */
function getAnalyzedData(ratings, ratingsCount) {
  const ratingsSum = ratings.reduce((a, b) => a + (b.rating || 0), 0);
  const average = parseFloat((ratingsSum / ratingsCount).toFixed(1));
  const pubRatingsSum = ratings.reduce((a, b) => a + (b.imdbRating || 0), 0);
  const pubAverage = parseFloat((pubRatingsSum / ratingsCount).toFixed(1));
  const minutesSum = ratings.reduce((a, b) => a + (b.runtime || 0), 0);
  const daysWatched = parseFloat((minutesSum / 60 / 24).toFixed(1));

  return [average, pubAverage, daysWatched];
}

const MainInfos = ({ ratings, ratingsCount }) => {
  const [average, pubAverage, daysWatched] = getAnalyzedData(
    ratings,
    ratingsCount
  );

  return (
    <div className="bg-custgrayaccent flex py-6 shadow-innercard w-1/2 rounded-lg">
      <KeyValue description="Ratings" value={ratingsCount} />
      <KeyValue description="Days watched" value={daysWatched} />
      <KeyValue description="Your Avg" value={average} />
      <KeyValue description="Public Avg" value={pubAverage} />
    </div>
  );
};

MainInfos.propTypes = {
  ratings: PropTypes.array,
  ratingsCount: PropTypes.number,
};

const KeyValue = ({ description, value }) => {
  return (
    <div className="inline-block flex-1 mx-4">
      <div className="text-gray-600 text-lg text-center">{description}</div>
      <div className="text-3xl text-indigo-200 text-center">{value}</div>
    </div>
  );
};

KeyValue.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
};

export default MainInfos;
