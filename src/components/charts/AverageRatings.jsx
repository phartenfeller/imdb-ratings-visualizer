import PropTypes from "prop-types";
import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
// import BarChart from './BarChart';

const AverageRatings = ({ ratingsData, ratingsCount }) => {
  return (
    <div className="card flex">
      <svg className="invisible absolute">
        <defs>
          <linearGradient id="lgrad" x1="49%" y1="100%" x2="51%" y2="0%">
            <stop offset="0%" stopColor="rgb(148,112,255)" />
            <stop offset="100%" stopColor="rgb(255,140,140)" />
          </linearGradient>
        </defs>
      </svg>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          style={{
            axis: { stroke: "none" },
            axisLabel: { fontSize: 12, padding: 30 },
            grid: { stroke: "none" },
          }}
          label="Stars"
        />
        <VictoryBar
          name="data"
          data={ratingsData}
          style={{ data: { fill: "url(#lgrad)" } }}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
          cornerRadius={{ top: 3 }}
          labels={({ datum }) => Math.round(datum.y, 1)}
          height={350}
        />
      </VictoryChart>
      {/* <BarChart
        title="Ratings per Stars"
        categories={categories}
        data={ratingsData}
        dataCount={ratingsCount}
        seriesName="Ratings"
      /> */}
    </div>
  );
};

AverageRatings.propTypes = {
  ratingsData: PropTypes.array,
  ratingsCount: PropTypes.number,
};

export default AverageRatings;
