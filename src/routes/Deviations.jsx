import PropTypes from "prop-types";
import React from "react";
import Table from "../components/Table";
import ratingsShape from "../types/ratingsShape";
import getLinkWithIcon from "../util/getLinkWithIcon";
import getSpanWithTooltip from "../util/getSpanWithTooltip";

/**
 * Splits deviations to negatives and positives and sorts them
 * @param {Array} ratings
 * @return {Array} positives and negatives
 */
const splitAndSort = (ratings) => {
  const positives = ratings.filter((rating) => {
    return rating.deviation > 0;
  });

  const negatives = ratings.filter((rating) => {
    return rating.deviation < 0;
  });

  // sort highest deviation first
  positives.sort((a, b) => b.deviation - a.deviation);
  negatives.sort((a, b) => a.deviation - b.deviation);

  return [positives, negatives];
};

const getTableCell = ({ value, alignment }) => {
  const alignmentClass = alignment ? `text-${alignment}` : "";
  return <div className={alignmentClass}>{value}</div>;
};

getTableCell.propTypes = {
  value: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(["left", "right", "center"]).isRequired,
};

const Deviation = ({ ratings }) => {
  const [positives, negatives] = splitAndSort(ratings);
  console.log("positives =>", positives);
  console.log("negatives =>", negatives);

  const columns = [
    {
      Header: "",
      accessor: "url",
      Cell: ({ row }) => getLinkWithIcon(row.values.url),
      maxWidth: 64,
    },
    {
      Header: "Title",
      accessor: "title",
      maxWidth: 400,
      Cell: ({ row }) => getSpanWithTooltip(row.values.title),
    },
    {
      Header: "Rating",
      accessor: "rating",
      maxWidth: 100,
      Cell: ({ row }) =>
        getTableCell({ value: row.values.rating, alignment: "center" }),
    },
    {
      Header: "IMDb",
      accessor: "imdbRating",
      maxWidth: 100,
      Cell: ({ row }) =>
        getTableCell({ value: row.values.imdbRating, alignment: "center" }),
    },
    {
      Header: "Deviation",
      accessor: "deviation",
      maxWidth: 100,
      Cell: ({ row }) =>
        getTableCell({ value: row.values.deviation, alignment: "center" }),
    },
  ];

  return (
    <div className="main-component">
      <div className="flex">
        <div className="flex-1 ml-4">
          <h2 className="text-3xl ml-6 mt-4 text-gray-400">Positive</h2>
          <Table data={positives} columns={columns} />
        </div>
        <div className="flex-1 mr-4">
          <h2 className="text-3xl ml-6 mt-4 text-gray-400">Negative</h2>
          <Table data={negatives} columns={columns} />
        </div>
      </div>
    </div>
  );
};

Deviation.propTypes = {
  ratings: PropTypes.arrayOf(ratingsShape).isRequired,
};

export default Deviation;
