import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import routes from '../util/routes';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarElements />
    </div>
  );
};

const SidebarElements = () => {
  return routes ? (
    <div>
      {routes.map(route => {
        return (
          <div key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </div>
        );
      })}
    </div>
  ) : (
    'Loading'
  );
};

export default Sidebar;
