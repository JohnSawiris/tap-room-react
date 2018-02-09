import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div className="keg">
      <div className="overlay">
        <div className="btns-wrapper">
          <button className="btn btn-blue">Pour a Pint</button>
          <button className="btn btn-green">Pour a Growler</button>
        </div>
      </div>
      <style jsx>{`
        .keg {
          flex-grow: 1;
          flex-basis: 300px;
          width: 300px;
          height: 300px;
          border: 1px solid #eee;
          border-radius: 5px;
          padding: 1.3rem;
          font-weight: 500;
          font-size: 1rem;
          margin: 1%;
          position: relative;
        }
        .keg:hover .overlay {
          opacity: 1;
        }
        .overlay {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0, .7);
          transition: 0.4s ease-in-out;
        }
        .overlay p {
          margin-top: .5rem;
        }
        .btn {
          display: inline-block;
          margin: 1%;
          width: 130px;
          margin: auto;
          padding: 0.5rem;
          text-align: center;
          border-radius: 5px;
          outline: 0;
          font-family: 'Ubuntu', sans-serif;
          color: #fff;
          font-weight: 400;
          font-size: 1rem;
          transition: 0.3s ease-in-out;
        }
        .btn-blue {
          background-color: #00aadc;
          border-color: #0087be;
        }
        .btn:hover {
          background-color: #0087be;
        }
        .btn-green {
          background-color: #4caf50;
          border-color: #419645;
        }
        .btn-green:hover {
          background-color: #419645;
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
