import React from 'react';
import PropTypes from 'prop-types';
import './MainInfos.scss';

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
    <div className="chart-container">
      <table>
        <tbody>
          <KeyValue description="ratings" value={ratingsCount} />
          <KeyValue description="your avg rating" value={average} />
          <KeyValue description="public avg rating" value={pubAverage} />
          <KeyValue description="days watched" value={daysWatched} />
        </tbody>
      </table>
    </div>
  );
};

MainInfos.propTypes = {
  ratings: PropTypes.array,
  ratingsCount: PropTypes.number,
};

const KeyValue = ({ description, value }) => {
  return (
    <tr>
      <td className="info-value">{value}</td>
      <td className="info-key">{description}</td>
    </tr>
  );
};

KeyValue.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
};

export default MainInfos;
