import React, { useState, useEffect } from 'react';
import './App.scss';
import RatingsTable from './components/RatingsTable';
import Uploader from './components/Uploader';
import TitleBar from './components/TitleBar';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [ratings, setRatings] = useState();

  useEffect(() => {
    if (!loaded) {
      const sessionData = sessionStorage.getItem('ratings');

      if (sessionData) {
        setRatings(JSON.parse(sessionData));
        setLoaded(true);
      }
    }
  });

  return (
    <div className="App">
      <TitleBar />
      {loaded ? (
        <RatingsTable ratings={ratings} />
      ) : (
        <Uploader setLoaded={setLoaded} setRatings={setRatings} />
      )}
    </div>
  );
};

export default App;
