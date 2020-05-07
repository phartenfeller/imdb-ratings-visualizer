import PropTypes from "prop-types";
import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import ratingsShape from "../../types/ratingsShape";

/**
 * Count Ratings per Weekday
 * @param {Array} ratings
 * @return {Array}
 */
function countRatings(ratings) {
  const ratingsObject = [
    { x: "Sunday", y: 0 },
    { x: "Monday", y: 0 },
    { x: "Tuesday", y: 0 },
    { x: "Wednesday", y: 0 },
    { x: "Thursday", y: 0 },
    { x: "Friday", y: 0 },
    { x: "Saturday", y: 0 },
  ];

  ratings.forEach((rating) => {
    const weekday = rating.dateRated.getDay();
    ratingsObject[weekday].y += 1;
  });

  // move Sunday to the end
  ratingsObject.push(ratingsObject.shift());

  return ratingsObject;
}

const RatingsPerWeekday = ({ ratings }) => {
  const ratingsPerWeekday = countRatings(ratings);
  console.log("ratingsPerWeekday =>", ratingsPerWeekday);

  return (
    <div className="card w-1/2">
      <VictoryChart theme={VictoryTheme.material} height={350} width={500}>
        <VictoryAxis
          style={{
            axis: { stroke: "none" },
            axisLabel: { fontSize: 12, padding: 30 },
            grid: { stroke: "none" },
          }}
        />
        <svg className="invisible absolute">
          <defs>
            <linearGradient id="lgrad" x1="49%" y1="100%" x2="51%" y2="0%">
              <stop offset="0%" stopColor="rgb(148,112,255)" />
              <stop offset="100%" stopColor="rgb(255,140,140)" />
            </linearGradient>
          </defs>
        </svg>
        <VictoryBar
          name="data"
          data={ratingsPerWeekday}
          // style={{ data: { fill: 'url(#lgrad)' } }}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
          cornerRadius={{ top: 3 }}
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
    </div>
  );
};

RatingsPerWeekday.propTypes = {
  ratings: PropTypes.arrayOf(ratingsShape).isRequired,
};

export default RatingsPerWeekday;
