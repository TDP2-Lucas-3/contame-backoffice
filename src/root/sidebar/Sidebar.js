import React from 'react';
import {Link} from 'react-router-dom';
import {SidebarData} from './sidebarData';
import './Sidebar.css';
import {IconContext} from 'react-icons';

export const Sidebar = () => {
  return (
    <IconContext.Provider value={{color: '#1F271B'}}>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};
