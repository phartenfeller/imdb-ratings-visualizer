import mediaTypes from '../constants/mediaTypes';

const separator = '***';

/**
 * Upload Process for File
 * @param {Blob} file
 * @return {JSON}
 */
async function uploadFile(file) {
  const csv = await readFile(file);
  return csvToJson(csv);
}

/**
 * Read Contents of a File
 * @param {Blob} file
 * @return {String}
 */
function readFile(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onloadend = event => {
      const content = event.target.result;
      resolve(content);
    };

    fileReader.onerror = err => {
      reject(err);
    };
    fileReader.readAsText(file, 'Windows-1252');
  });
}

/**
 * Translate CSV to JSON
 * @param {String} rawCsv
 * @return {JSON}
 */
function csvToJson(rawCsv) {
  const csv = cleanData(rawCsv);

  const lines = csv.split('\n');
  console.log(lines[0]);
  let result = [];
  const headers = lines[0].split(separator);

  lines.map((line, indexLine) => {
    if (indexLine < 1) return result; // Jump header line

    const obj = {};
    const currentline = line.split(separator);

    headers.map((header, indexHeader) => {
      obj[header] = currentline[indexHeader];
      return obj;
    });

    result.push(obj);
    return result;
  });

  result.pop(); // remove the last item because undefined values

  result = convertDatatypes(result);

  console.log(result);
  return result;
}

/**
 * Clean CSV Data
 * @param {String} csv
 * @return {String}
 */
function cleanData(csv) {
  let cleanedCsv;
  cleanedCsv = changeHeaders(csv);
  // change all commas in titles to ###
  cleanedCsv = cleanedCsv.replace(/"[^"]+"/g, v => {
    return v.replace(/,/g, '###');
  });

  // change all comma seperators to own separator
  cleanedCsv = cleanedCsv.replace(/,/g, separator);

  // change back to commas in title
  cleanedCsv = cleanedCsv.replace(/###/g, ',');

  // remove quotes in titles
  cleanedCsv = cleanedCsv.replace(/"/g, '');

  return cleanedCsv;
}

/**
 * Change Headers of CSV
 * @param {String} csv
 * @return {String}
 */
function changeHeaders(csv) {
  let cleanedCsv;
  cleanedCsv = csv.replace('Const,', 'id,');
  cleanedCsv = cleanedCsv.replace('Your Rating,', 'rating,');
  cleanedCsv = cleanedCsv.replace('Title,', 'title,');
  cleanedCsv = cleanedCsv.replace('Date Rated,', 'dateRatedString,');
  cleanedCsv = cleanedCsv.replace('Genres,', 'genres,');
  cleanedCsv = cleanedCsv.replace('Title Type,', 'mediaType,');
  cleanedCsv = cleanedCsv.replace('Num Votes,', 'votes,');
  cleanedCsv = cleanedCsv.replace('Runtime (mins),', 'runtime,');
  cleanedCsv = cleanedCsv.replace('Release Date,', 'releaseDate,');
  cleanedCsv = cleanedCsv.replace('URL,', 'url,');
  cleanedCsv = cleanedCsv.replace('Year,', 'year,');
  cleanedCsv = cleanedCsv.replace('IMDb Rating,', 'imdbRating,');
  cleanedCsv = cleanedCsv.replace(',Directors', ',directors');
  return cleanedCsv;
}

/**
 * Covert Strings to corresponding datatypes
 * @param {Array} data
 * @return {Array}
 */
function convertDatatypes(data) {
  data.map(review => {
    const mediaTypeId = mediaTypes.findIndex(
      mediaType => mediaType.exportName === review.mediaType
    );

    review.rating = parseInt(review.rating);
    review.runtime = parseInt(review.runtime);
    review.votes = parseInt(review.votes);
    review.year = parseInt(review.year);
    review.imdbRating = parseFloat(review.imdbRating);
    review.dateRated = new Date(review.dateRatedString);
    review.mediaTypeId = mediaTypeId;
    review.mediaType = mediaTypes[mediaTypeId].name;
    review.genres = review.genres.split(', ');
    review.directors = review.directors.split(', ');
    review.deviation = parseFloat(
      (review.rating - review.imdbRating).toFixed(1)
    );
    return review;
  });

  return data;
}

export { uploadFile };
