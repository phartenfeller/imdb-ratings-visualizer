import React from 'react';
import './App.css';
import { csvToJson } from './helper/csvToJson';
import RatingsTable from './RatingsTable';

const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  const readFile = file => {
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
  };

  const uploadFile = () => {
    const file = document.getElementById('fileUpload').files[0];
    readFile(file).then(csv => {
      const json = csvToJson(csv);
      sessionStorage.setItem('ratings', JSON.stringify(json));
      setLoaded(true);
    });
  };

  return (
    <div className="App">
      {loaded ? (
        <RatingsTable />
      ) : (
        <div>
          <h1>Upload IMDb Ratings CSV</h1>
          <input type="file" id="fileUpload" onChange={uploadFile} />
        </div>
      )}
    </div>
  );
};

export default App;
