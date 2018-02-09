import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const linkStyling = {
    textDecoration: "none",
    padding: "1.4rem",
    color: "#333"
  }
  return(
    <header className="head">

      <nav>
        <Link style={linkStyling} to="/">Home</Link>
        <Link style={linkStyling} to="/kegs">Kegs</Link>
      </nav>
      <style jsx>{`
          .head {
            border-bottom: 1px solid #ccc;
            padding: .7rem 2rem;
          }
      `}</style>
    </header>
  );
}

export default Header;
