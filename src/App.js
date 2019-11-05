import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Uploader from './components/Uploader';
import Sidebar from './components/Sidebar';
import { HashRouter as Router, Route } from 'react-router-dom';
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
    <>
      {/* <TitleBar /> */}
      <div>
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
    </>
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
    return path === '/' ? (
      <Route
        exact
        path={path}
        render={() => <Component ratings={filteredRatings} />}
        key={name}
      />
    ) : (
      <Route
        path={path}
        render={() => <Component ratings={filteredRatings} />}
        key={name}
      />
    );
  });

  return (
    <div className="flex">
      <Sidebar
        loadedMediaTypes={loadedMediaTypes}
        filterMovies={filterMovies}
      />
      <div className="ml-64 w-full">{routeComponents}</div>
      {/* <RatingsTable ratings={ratings} /> */}
    </div>
  );
};

LoadedApp.propTypes = {
  ratings: PropTypes.array,
  loadedMediaTypes: PropTypes.array,
};

export default App;
