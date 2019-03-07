const separator = '***';

/**
 * Upload Process for File
 * @param {Blob} file
 * @return {JSON}
 */
async function uploadFile(file) {
  const csv = await readFile(file);
  return csvToJson(csv);
  // sessionStorage.setItem('ratings', JSON.stringify(json));
  // setLoaded(true);
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
  const result = [];
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
  // change headers
  cleanedCsv = csv.replace('Const,', 'id,');
  cleanedCsv = cleanedCsv.replace('Your Rating,', 'rating,');
  cleanedCsv = cleanedCsv.replace('Title,', 'title,');

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

export { uploadFile };
