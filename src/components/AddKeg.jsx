import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function AddKeg(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pints = null;
  let id = v4();

  function handleAddingKeg(event) {
    event.preventDefault();
    const name = _name.value;
    const brand = _brand.value;
    const price = parseInt(_price.value);
    const alcoholContent = parseInt(_alcoholContent.value);
    const pints = parseInt(_pints.value);
    props.onAddingKegToList({name, brand, price, alcoholContent, pints, id});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pints.value = '';
  }

  return(
    <div className="form-container">
        
      <style jsx>{`
                .form-container {
                    position: absolute;
                    top: 1rem;
                    left: 0;
                    width: 100%;
                    z-index: 1000000000000;
                }
                .form-wrap {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    margin: auto;
                    padding: 1rem;
                    background-color: #eee;
                    border-radius: 10px;
                    color: #111;
                }
                .form-group {
                    display: block;
                    width: 100%;
                    margin: 0.5rem;
                }
                .form-control {
                    display: block;
                    width: 90%;
                    margin: auto;
                    margin-bottom: 0.4rem;
                }
                input.form-control {
                    padding: 0.4rem 0.9rem;
                    outline: 0;
                    border: 0;
                    border-radius: 5px;
                }
                button.submit-btn {
                    display: inline-block;
                    padding: 0.8rem 0.9rem;
                    font-family: 'Ubuntu', sans-serif;
                    font-weight: 700;
                    border-radius: 10px;
                    outline: 0;
                    margin: 1rem 0 0.5rem 2.6rem;
                    width: 30%;
                    background-color: #00aadc;
                    border-color: #19a8e2;
                    color: #fff;
                    letter-spacing: 1px;
                }
                .close {
                    align-self: flex-end;
                    box-shadow: 0 0 3px #333;
                    border-radius: 2px;
                    padding: 0.25rem;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-right: 1rem;
                    color: #ce320a;
                    cursor: pointer;
                }
                .close:active {
                    box-shadow: 0 0 1px #333;
                }
            `}</style>
      <form className="form-wrap" onSubmit={handleAddingKeg}>
        <span className="close" onClick={props.toggle}>X</span>
        <h1>Add a New Keg</h1> 
        <div className="form-group">
          <label className="form-control"label>Name</label>
          <input className="form-control" type="text" name="name" ref={(input) => { _name = input; }} required/>
        </div>
        <div className="form-group">
          <label className="form-control">Brand</label>
          <input className="form-control" type="text" name="brand" ref={(input) => { _brand = input; }} required/>
        </div>
        <div className="form-group">
          <label className="form-control">Price</label>
          <input className="form-control" type="number" name="price" ref={(input) => { _price = input; }} required/>
        </div>
        <div className="form-group">
          <label className="form-control">Alcohol Content</label>
          <input className="form-control" type="number" name="alcohol content" ref={(input) => { _alcoholContent = input; }} required/>
        </div>
        <div className="form-group">
          <label className="form-control">Amount</label>
          <input className="form-control" type="number" name="amount left" ref={(input) => { _pints = input; }} required/>
        </div>
        <button className="submit-btn" type="submit" onClick={props.toggle}>Add Keg</button>
      </form>
    </div>
  );
}

AddKeg.propTypes = {
  onAddingKegToList: PropTypes.func,
  toggle: PropTypes.func
};

export default AddKeg;