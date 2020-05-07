import PropTypes from "prop-types";

const ratingsShape = PropTypes.shape({
  dateRated: PropTypes.instanceOf(Date).isRequired,
  dateRatedString: PropTypes.string.isRequired,
  deviation: PropTypes.number.isRequired,
  directors: PropTypes.arrayOf(PropTypes.string).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  imdbRating: PropTypes.number.isRequired,
  mediaType: PropTypes.string.isRequired,
  mediaTypeId: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
});

export default ratingsShape;
