import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="text">
        <span className="text">
          Conta<div className="yellowText">ME</div>
        </span>
      </Link>
    </div>
  );
};
