import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Uploader from './components/Uploader';
import TitleBar from './components/TitleBar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './util/routes';
import recoverData from './util/recoverData';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [ratings, setRatings] = useState();
  const [loadedMediaTypes, setLoadedMediaTypes] = useState();

  useEffect(() => {
    if (!loaded) {
      recoverData(setRatings, setLoadedMediaTypes, setLoaded);
    }
  }, [loaded]);

  return (
    <div className="App">
      <TitleBar />
      <div className="main-content">
        {loaded ? (
          <Router>
            <LoadedApp ratings={ratings} loadedMediaTypes={loadedMediaTypes} />
          </Router>
        ) : (
          <Uploader
            setLoaded={setLoaded}
            setRatings={setRatings}
            setLoadedMediaTypes={setLoadedMediaTypes}
          />
        )}
      </div>
    </div>
  );
};

const LoadedApp = ({ ratings, loadedMediaTypes }) => {
  const [filteredRatings, setFilteredRatings] = useState(ratings);

  const filterMovies = filterMap => {
    const filtered = ratings.filter(
      rating => filterMap.get(rating.mediaTypeId) === true
    );

    setFilteredRatings(filtered);
  };

  const routeComponents = routes.map(({ path, component: Component, name }) => {
    return (
      <Route
        exact
        path={`${process.env.PUBLIC_URL}${path}`}
        render={() => <Component ratings={filteredRatings} />}
        key={name}
      />
    );
  });

  return (
    <div>
      <Sidebar
        loadedMediaTypes={loadedMediaTypes}
        filterMovies={filterMovies}
      />
      {routeComponents}
      {/* <RatingsTable ratings={ratings} /> */}
    </div>
  );
};

LoadedApp.propTypes = {
  ratings: PropTypes.array,
  loadedMediaTypes: PropTypes.array,
};

export default App;
