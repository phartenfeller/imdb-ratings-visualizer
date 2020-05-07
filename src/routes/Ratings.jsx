import PropTypes from "prop-types";
import React from "react";
import Table from "../components/Table";
import ratingsShape from "../types/ratingsShape";
import getLinkWithIcon from "../util/getLinkWithIcon";

const RatingsTable = ({ ratings }) => {
  const columns = [
    {
      Header: "",
      accessor: "url",
      Cell: ({ row }) => getLinkWithIcon(row.values.url),
      maxWidth: 64,
      className: "cell-center",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Rating",
      accessor: "rating",
      maxWidth: 150,
      className: "cell-center",
    },
    {
      Header: "Type",
      accessor: "mediaType",
      maxWidth: 150,
      className: "cell-center",
    },
    {
      Header: "Rated",
      accessor: "dateRatedString",
      maxWidth: 150,
      className: "cell-center",
    },
    {
      Header: "Year",
      accessor: "year",
      maxWidth: 150,
      className: "cell-center",
    },
  ];

  const defaultSorted = [
    {
      id: "rating",
      desc: true,
    },
  ];

  return (
    <div className="main-component" style={{ padding: 40 }}>
      <Table data={ratings} columns={columns} defaultSorted={defaultSorted} />
    </div>
  );
};

RatingsTable.propTypes = {
  ratings: PropTypes.arrayOf(ratingsShape).isRequired,
};

export default RatingsTable;
