import React from 'react';

function AddKeg() {
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
      <form className="form-wrap">
        <div className="form-group">
          <label className="form-control"label>Name</label>
          <input className="form-control" type="text" name="name"/>
        </div>
        <div className="form-group">
          <label className="form-control">Brand</label>
          <input className="form-control" type="text" name="brand"/>
        </div>
        <div className="form-group">
          <label className="form-control">Price</label>
          <input className="form-control" type="text" name="price"/>
        </div>
        <div className="form-group">
          <label className="form-control">Alcohol Content</label>
          <input className="form-control" type="text" name="alcohol content"/>
        </div>
        <div className="form-group">
          <label className="form-control">Pints Left</label>
          <input className="form-control" type="text" name="amount left"/>
        </div>
        <button className="submit-btn" type="submit">Add Keg</button>
      </form>
    </div>
  );
}

export default AddKeg;