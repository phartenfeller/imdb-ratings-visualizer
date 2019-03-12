import React from 'react';
import PropTypes from 'prop-types';
import BarChart from './BarChart';

const AverageRatings = ({ ratingsData, ratingsCount }) => {
  const categories = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <BarChart
      title="Ratings per Stars"
      categories={categories}
      data={ratingsData}
      dataCount={ratingsCount}
      seriesName="Ratings"
      height="350"
      width="600"
    />
  );
};

AverageRatings.propTypes = {
  ratingsData: PropTypes.array,
  ratingsCount: PropTypes.number,
};

export default AverageRatings;
