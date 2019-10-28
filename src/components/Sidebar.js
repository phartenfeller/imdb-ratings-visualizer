import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../util/routes';
import mediaTypes from '../constants/mediaTypes';

/**
 * returns active route name
 * @param {Array} routes
 * @return {String}
 */
const getActiveRoute = routes => {
  console.log(routes);

  const currentRoute = routes.find(route => {
    const lastPath = window.location.href.substr(
      window.location.href.lastIndexOf('/')
    );

    return route.path === lastPath;
  });

  console.log('currentRoute =>', currentRoute);
  return currentRoute.name;
};

const Sidebar = ({ loadedMediaTypes, filterMovies }) => {
  const precheckBoxes = loadedMediaTypes.map(typeId => {
    return [typeId, true];
  });
  const [forceUpdate, setForceUpdate] = useState(1);
  const [checkedItems, setCheckedItems] = useState(new Map(precheckBoxes));

  const handleCheckboxChange = event => {
    const id = parseInt(event.target.value);
    const isChecked = event.target.checked;
    setCheckedItems(checkedItems.set(id, isChecked));
    setForceUpdate(forceUpdate + 1);
    filterMovies(checkedItems);
  };

  return (
    <div className="w-14 h-screen bg-custgraybright shadow-inner">
      <h1 className="text-purple-300 font-semibold text-2xl text-center text-shadow my-4">
        Movies Rating Visualizer
      </h1>
      <SidebarElements />
      <div className="mt-10">
        {checkedItems
          ? loadedMediaTypes.map(typeId => {
              return (
                <Checkbox
                  key={typeId}
                  id={typeId}
                  name={mediaTypes[typeId].name}
                  checked={checkedItems.get(typeId)}
                  onChange={handleCheckboxChange}
                />
              );
            })
          : 'loading'}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  loadedMediaTypes: PropTypes.array,
  filterMovies: PropTypes.func,
};

const SidebarElements = () => {
  const [active, setActive] = useState(getActiveRoute(routes));

  const isActive = name => {
    return active === name;
  };

  return routes ? (
    <div>
      {routes.map(route => {
        return (
          <Link to={route.path} className="sidebar-link mb-6" key={route.name}>
            <div className={isActive(route.name) ? 'active-tab' : ''}>
              <div
                onClick={() => setActive(route.name)}
                className="sidebar-box"
              >
                <i
                  className={`material-icons text-2xl align-middle pl-3 ${
                    isActive(route.name) ? 'text-purple-200' : 'text-gray-700'
                  }`}
                >
                  {route.icon}
                </i>
                <span
                  className={`text-2xl align-middle pl-3 ${
                    isActive(route.name) ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {route.name}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  ) : (
    'Loading'
  );
};

const Checkbox = ({ id, name, checked, onChange }) => {
  return (
    <label className="block mx-4">
      <input
        type="checkbox"
        className="form-checkbox text-gray-700 h-5 w-5"
        value={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="pl-3 text-xl" />
      {name}
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Sidebar;
