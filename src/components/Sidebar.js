import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import routes from '../util/routes';
import mediaTypes from '../constants/mediaTypes';

/**
 * returns active route name
 * @return {String}
 */
function getActiveRoute() {
  const currentRoute = routes.find(route => {
    return route.path === window.location.pathname;
  });

  return currentRoute.name;
}

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
    <div className="sidebar">
      <SidebarElements />
      <div>
        <h3 className="filter-heading">Filter</h3>
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
  const [active, setActive] = useState(getActiveRoute());

  const isActive = name => {
    return active === name;
  };

  return routes ? (
    <div>
      {routes.map(route => {
        return (
          <div key={route.name}>
            <Link to={route.path} className="sidebar-link">
              <div className={isActive(route.name) ? 'active-tab' : ''}>
                <div
                  onClick={() => setActive(route.name)}
                  className="sidebar-box"
                >
                  <i className="material-icons sidebar-icon">{route.icon}</i>
                  <span className="sidebar-text">{route.name}</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  ) : (
    'Loading'
  );
};

const Checkbox = ({ id, name, checked, onChange }) => {
  return (
    <label className="filter-checkbox-label">
      <input
        type="checkbox"
        className="custom-checkbox"
        value={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
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
