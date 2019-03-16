import React from 'react';
import PropTypes from 'prop-types';
import './MainInfos.scss';

const MainInfos = ({ ratings, ratingsCount }) => {
  const ratingsSum = ratings.reduce((a, b) => a + (b.rating || 0), 0);
  const average = (ratingsSum / ratingsCount).toFixed(1);

  return (
    <div className="chart-container">
      <KeyValue description="ratings" value={ratingsCount} />
      <KeyValue description="your avg rating" value={average} />
    </div>
  );
};

MainInfos.propTypes = {
  ratings: PropTypes.array,
  ratingsCount: PropTypes.number,
};

const KeyValue = ({ description, value }) => {
  return (
    <div>
      <span className="info-value">{value}</span>
      <span className="info-key">{description}</span>
    </div>
  );
};

KeyValue.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
};

export default MainInfos;
