import PropTypes from "prop-types";
import React from "react";
import RatingssPerDecade from "../components/charts/RatingsPerDecade";
import RatingsPerWeekday from "../components/charts/RatingsPerWeekday";
import RatingsPerYear from "../components/charts/RatingsPerYear";
import ratingsShape from "../types/ratingsShape";

const Time = ({ ratings }) => {
  return (
    <div className="main-component">
      <RatingsPerWeekday ratings={ratings} />
      <RatingsPerYear ratings={ratings} />
      <RatingssPerDecade ratings={ratings} />
    </div>
  );
};

Time.propTypes = {
  ratings: PropTypes.arrayOf(ratingsShape).isRequired,
};

export default Time;
