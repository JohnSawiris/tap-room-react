import React from 'react';

function Welcome() {
  return(
    <div className="welcome-section">
      <style jsx>{`
          .welcome-section {
            text-align: center;
            padding: 4rem 3rem;
            width: 100%;
            margin: 2rem auto 0;
            background-color: #ddd;
            box-shadow: 0 0 5px #ccc;
          }
          h1 {
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
      `}</style>
      <h1>Welcome to Tap Room</h1>
    </div>
  );
}

export default Welcome;
