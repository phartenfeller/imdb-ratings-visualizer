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
    fileReader.readAsText(file);
  });
}

/**
 * Translate CSV to JSON
 * @param {String} rawCsv
 * @return {JSON}
 */
function csvToJson(rawCsv) {
  let csv = rawCsv.replace('Const,', 'id,');
  csv = csv.replace('Your Rating,', 'rating,');
  csv = csv.replace('Title,', 'title,');

  const lines = csv.split('\n');
  const result = [];
  const headers = lines[0].split(',');

  lines.map((line, indexLine) => {
    if (indexLine < 1) return result; // Jump header line

    const obj = {};
    const currentline = line.split(',');

    headers.map(function(header, indexHeader) {
      obj[header] = currentline[indexHeader];
      return obj;
    });

    result.push(obj);
    return result;
  });

  result.pop(); // remove the last item because undefined values

  return result;
}

export { uploadFile };
