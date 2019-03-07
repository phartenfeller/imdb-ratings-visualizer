import React from 'react';
import './App.css';
import RatingsTable from './RatingsTable';
import Uploader from './Uploader';

const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="App">
      {loaded ? <RatingsTable /> : <Uploader setLoaded={setLoaded} />}
    </div>
  );
};

export default App;
