import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from 'victory';

const getRatingsPerYear = ratings => {
  const ratingsArray = ratings
    .map(rating => rating.dateRated.getFullYear())
    .sort();

  const yearCount = ratingsArray.reduce((prev, curr) => {
    const index = prev.findIndex(entries => entries.x === curr);
    index !== -1 ? prev[index].y++ : prev.push({ x: curr, y: 1 });
    return prev;
  }, []);

  return yearCount;
};

const RatingsPerYear = ({ ratings }) => {
  const yearsData = getRatingsPerYear(ratings);

  return (
    <div className="card w-1/2">
      <VictoryChart theme={VictoryTheme.material} height={350} width={500}>
        <VictoryAxis
          tickFormat={t => `${t}`}
          style={{
            axis: { stroke: 'none' },
            axisLabel: { fontSize: 12, padding: 30 },
            grid: { stroke: 'none' },
          }}
        />
        <VictoryBar
          name="data"
          data={yearsData}
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

RatingsPerYear.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsPerYear;
