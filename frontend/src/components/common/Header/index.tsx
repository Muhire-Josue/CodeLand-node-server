import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header: React.FC = (): React.ReactElement => {
  return (
    <header className="Header">
      <div>
        <h1 className="logo">Logo</h1>
      </div>
      <div className="menu-items">
        <Link to="/employees" className="item">
          <span className="small-h-padding">Employees</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
