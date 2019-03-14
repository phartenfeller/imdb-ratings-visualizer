import React from 'react';
import PropTypes from 'prop-types';
import BarChart from './BarChart';

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

/**
 * Count Ratings per Weekday
 * @param {Array} ratings
 * @return {Array}
 */
function countRatings(ratings) {
  const counts = [0, 0, 0, 0, 0, 0, 0];

  const weekdayRatings = ratings.reduce((prevValue, currentValue) => {
    const weekday = currentValue.dateRated.getDay();
    prevValue[weekday]++;
    return prevValue;
  }, counts);

  // move Sunday to the end
  weekdayRatings.push(weekdayRatings.shift());
  return weekdayRatings;
}

const RatingsPerWeekday = ({ ratings }) => {
  const ratingsCount = ratings.length;
  const ratingsPerWeekday = countRatings(ratings);
  console.log('ratingsPerWeekday =>', ratingsPerWeekday);

  return (
    <div>
      <BarChart
        title="Ratings per Weekday"
        categories={weekdays}
        data={ratingsPerWeekday}
        dataCount={ratingsCount}
        seriesName="Weekday"
        width={600}
        height={350}
      />
    </div>
  );
};

RatingsPerWeekday.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsPerWeekday;
