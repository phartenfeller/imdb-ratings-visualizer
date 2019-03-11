/**
 * Check which mediaTypes are present in Uplaoad
 * @param {Array} ratings
 * @return {Array}
 */
function getUniqueMediaTypes(ratings) {
  let unique = [...new Set(ratings.map(rating => rating.mediaTypeId))];
  unique = unique.sort();
  return unique;
}

export default getUniqueMediaTypes;
