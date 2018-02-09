import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header className="head">

      <nav className="navbar">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/kegs">Kegs</Link>
      </nav>


      <style global jsx>{`
          .head {
            border-bottom: 1px solid #eee;
          }
          .navbar {
            display: flex;
            width: 100%;
            margin: auto;
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
            background-color: rgba(255,255,255, 0.5);
          }
      `}</style>
    </header>
  );
}

export default Header;
