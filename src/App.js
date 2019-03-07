import React from 'react';
import './App.css';
import RatingsTable from './components/RatingsTable';
import Uploader from './components/Uploader';

const App = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [ratings, setRatings] = React.useState();

  return (
    <div className="App">
      {loaded ? (
        <RatingsTable ratings={ratings} />
      ) : (
        <Uploader setLoaded={setLoaded} setRatings={setRatings} />
      )}
    </div>
  );
};

export default App;
