import React from 'react';

function AddKeg(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pints = null;

  function handleAddingKeg(event) {
    event.preventDefault();
    const name = _name.value;
    const brand = _brand.value;
    const price = parseInt(_price.value);
    const alcoholContent = parseInt(_alcoholContent.value);
    const pints = parseInt(_pints.value);
    console.log(alcoholContent);
    console.log(pints);
    props.onAddingKegToList({name, brand, price, alcoholContent, pints});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pints.value = '';
  }

  return(
    <div>
      <style jsx>{`
                .form-wrap {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    margin: auto;
                    padding: 1rem;
                    background-color: rgba(255,255,255, 0.4);
                    border-radius: 10px;
                }
                .form-group {
                    display: block;
                    width: 100%;
                    margin: 0.25rem;
                }
                .form-control {
                    display: block;
                    width: 100%;
                    margin-bottom: 0.4rem;
                }
                input.form-control {
                    padding: 0.4rem 0.9rem;
                    outline: 0;
                    border: 0;
                    border-radius: 5px;
                }
                .submit-btn {
                    padding: 0.8rem 0.9rem;
                    font-family: 'Ubuntu', sans-serif;
                    font-weight: 700;
                    border-radius: 10px;
                    outline: 0;
                    width: 30%;
                    background-color: #00aadc;
                    border-color: #0087be;
                    color: #fff;
                }
            `}</style>
      <form className="form-wrap" onSubmit={handleAddingKeg}>
        <div className="form-group">
          <label className="form-control"label>Name</label>
          <input className="form-control" type="text" name="name" ref={(input) => { _name = input; }}/>
        </div>
        <div className="form-group">
          <label className="form-control">Brand</label>
          <input className="form-control" type="text" name="brand" ref={(input) => { _brand = input; }}/>
        </div>
        <div className="form-group">
          <label className="form-control">Price</label>
          <input className="form-control" type="number" name="price" ref={(input) => { _price = input; }}/>
        </div>
        <div className="form-group">
          <label className="form-control">Alcohol Content</label>
          <input className="form-control" type="number" name="alcohol content" ref={(input) => { _alcoholContent = input; }}/>
        </div>
        <div className="form-group">
          <label className="form-control">Amount</label>
          <input className="form-control" type="number" name="amount left" ref={(input) => { _pints = input; }}/>
        </div>
        <button className="submit-btn" type="submit">Add Keg</button>
      </form>
    </div>
  );
}

export default AddKeg;