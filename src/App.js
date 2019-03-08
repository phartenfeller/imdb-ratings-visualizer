import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Uploader from './components/Uploader';
import TitleBar from './components/TitleBar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './util/routes';

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
      <div className="main-content">
        {loaded ? (
          <Router>
            <LoadedApp ratings={ratings} />
          </Router>
        ) : (
          <Uploader setLoaded={setLoaded} setRatings={setRatings} />
        )}
      </div>
    </div>
  );
};

const LoadedApp = ({ ratings }) => {
  const routeComponents = routes.map(({ path, component: Component, name }) => {
    return (
      <Route
        exact
        path={path}
        render={() => <Component ratings={ratings} />}
        key={name}
        ratings={ratings}
      />
    );
  });

  return (
    <div>
      <Sidebar />
      {routeComponents}
      {/* <RatingsTable ratings={ratings} /> */}
    </div>
  );
};

LoadedApp.propTypes = {
  ratings: PropTypes.array,
};

export default App;
