import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <nav className="navbar">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/kegs">Kegs</Link>
      </nav>
      <style global jsx>{`
          .navbar {
            display: flex;
            width: 100%;
            margin: auto;
            border-bottom: 1px solid #aaa;
          }
          .links {
            text-decoration: none;
            display: inline-block;
            padding: 1.5rem;
            color: #eee;
            font-weight: 500;
            transition: 0.4s ease-in;
          }
          .links:hover {
            background-color: rgba(0,0,0, 0.2);
          }
      `}</style>
    </header>
  );
}

export default Header;
