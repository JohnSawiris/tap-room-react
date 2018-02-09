import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div className="keg">

      <style jsx>{`
        .keg {
          flex-grow: 1;
          flex-basis: 300px;
          width: 300px;
          border: 1px solid #eee;
          border-radius: 5px;
          padding: 1.3rem;
          font-weight: 500;
          font-size: 1rem;
          margin: 1%;
        }
        `}</style>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: ${props.price}</p>
      <p>Alcohol Content: {props.alcoholConent}%</p>
      <p>Pints Left: {props.pints}</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
  alcoholConent: PropTypes.number,
  pints: PropTypes.number
};

export default Keg;
