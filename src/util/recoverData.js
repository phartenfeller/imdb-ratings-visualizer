/**
 * Load data from session storage to component state
 * @param {Function} setRatings
 * @param {Function} setLoadedMediaTypes
 * @param {Function} setLoaded
 */
async function recoverData(setRatings, setLoadedMediaTypes, setLoaded) {
  const sessionRatings = sessionStorage.getItem('ratings');

  // load data from session storage
  if (sessionRatings) {
    const ratingsJSON = await JSON.parse(sessionRatings);
    const ratings = await recoverDates(ratingsJSON);
    setRatings(ratings);
    console.log(ratings);
    setLoadedMediaTypes(
      sessionStorage
        .getItem('mediaTypes')
        .split(',')
        .map(item => parseInt(item))
    );
    setLoaded(true);
  }
}

/**
 * Convert Date Strings to Javascript Dates
 * @param {Array} ratings
 * @return {Array}
 */
async function recoverDates(ratings) {
  return ratings.map(rating => {
    rating.dateRated = new Date(rating.dateRated);
    return rating;
  });
}

export default recoverData;
