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
    if (indexLine < 1) return; // Jump header line

    const obj = {};
    const currentline = line.split(',');

    headers.map(function(header, indexHeader) {
      obj[header] = currentline[indexHeader];
    });

    result.push(obj);
  });

  result.pop(); // remove the last item because undefined values

  return result; // JavaScript object
}

export { csvToJson };
