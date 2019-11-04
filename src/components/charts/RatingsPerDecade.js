import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from 'victory';

/**
 * Convert a year to it's decade
 * @param {Number} year
 * @return {Number}
 */
const yearToDecade = year => {
  return Math.floor(year / 10) * 10;
};

const getDecadeIndex = (decadeArray, decade) => {
  return decadeArray.findIndex(entries => entries.x === decade);
};

const analyseDecadeData = ratings => {
  const decades = ratings.map(rating => {
    return { decade: yearToDecade(rating.year), rating: rating.rating };
  });

  decades.sort((a, b) => a.decade - b.decade);

  const decadeCount = decades.reduce((prev, curr) => {
    const index = getDecadeIndex(prev, curr.decade);
    index !== -1 ? prev[index].y++ : prev.push({ x: curr.decade, y: 1 });
    return prev;
  }, []);

  const decadeCountCopy = [...decadeCount];

  ratings.map(rating => {
    const index = getDecadeIndex(decadeCountCopy, yearToDecade(rating.year));

    decadeCountCopy[index].sum
      ? (decadeCountCopy[index].sum =
          decadeCountCopy[index].sum + rating.rating)
      : (decadeCountCopy[index].sum = rating.rating);

    return 1;
  });

  console.log('decadeCountCopy =>', decadeCountCopy);

  const decadeAverage = decadeCountCopy.map(decade => {
    return { x: decade.x, y: parseFloat(decade.sum / decade.y).toFixed(1) };
  });

  return [decadeCount, decadeAverage];
};

const RatingsPerDecade = ({ ratings }) => {
  const data = analyseDecadeData(ratings);
  console.log('decadeCount =>', data[0]);
  console.log('decadeAverage =>', data[1]);

  const colors = ['red', 'green'];
  const maxima = data.map(dataset => Math.max(...dataset.map(d => d.y)));
  // const [counts, avgRating] = analysePerDecades(ratings, decades);

  return (
    <div className="card w-1/2">
      <VictoryChart
        theme={VictoryTheme.material}
        height={350}
        width={500}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => {
              return datum.childName === 'ratings'
                ? `Ratings: ${datum.y}`
                : `Avg Rating: ${datum.y}`;
            }}
            labelComponent={<VictoryTooltip constrainToVisibleArea />}
          />
        }
      >
        <VictoryAxis
          tickFormat={t => `${t}`}
          style={{
            axis: { stroke: 'none' },
            axisLabel: { fontSize: 12, padding: 30 },
            grid: { stroke: 'none' },
          }}
          tickCount={data[0].length}
        />
        <VictoryAxis
          name="ratings axis"
          orientation="right"
          dependentAxis
          tickCount={10}
          // offsetX={xOffsets[i]}
          style={{
            axis: { stroke: 'none' },
            axisLabel: { fontSize: 12, padding: 30 },
            grid: { stroke: 'none' },
          }}
          // Use normalized tickValues (0 - 1)
          // tickValues={[0.25, 0.5, 0.75, 1]}
          // Re-scale ticks by multiplying by correct maxima
          tickFormat={t => `${Math.round(t * maxima[0])}`}
        />
        <VictoryAxis
          name="avgRating axis"
          tickCount={10}
          dependentAxis
          // offsetX={xOffsets[i]}
          style={{
            axis: { stroke: 'none' },
            axisLabel: { fontSize: 12, padding: 30 },
            grid: { stroke: 'none' },
          }}
          // Use normalized tickValues (0 - 1)
          // tickValues={[0.25, 0.5, 0.75, 1]}
          // Re-scale ticks by multiplying by correct maxima
          tickFormat={t => `${Math.round(t * maxima[1])}`}
        />
        <VictoryLine
          name="ratings"
          data={data[0]}
          style={{ data: { stroke: colors[0] } }}
          // normalize data
          y={datum => datum.y / maxima[0]}
        />
        <VictoryLine
          name="avgRating"
          data={data[1]}
          style={{ data: { stroke: colors[1] } }}
          // normalize data
          y={datum => datum.y / maxima[1]}
        />
      </VictoryChart>
    </div>
  );
};

RatingsPerDecade.propTypes = {
  ratings: PropTypes.array,
};

export default RatingsPerDecade;
