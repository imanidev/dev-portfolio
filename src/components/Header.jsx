import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, subtitle }) => {
  return (
    <header className="site-header">
      <h1>{title}</h1>

      {subtitle && <h2>{subtitle}</h2>}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
