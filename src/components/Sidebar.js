import React, { useState } from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import routes from '../util/routes';

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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarElements />
    </div>
  );
};

const SidebarElements = () => {
  const [active, setActive] = useState(getActiveRoute());

  const isActive = name => {
    console.log('isActive =>', name);
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

export default Sidebar;
