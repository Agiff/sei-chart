import React from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Sei-Chart
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/table" className="btn btn-ghost">
              Table
            </Link>
          </li>
          <li>
            <Link to="/chart" className="btn btn-ghost">
              Chart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomNavbar;