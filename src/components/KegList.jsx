import React from 'react';
import Keg from './Keg';
import AddKeg from './AddKeg';

import kegs from './kegsData';

class KegList extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      kegsList: kegs,
      toggleDisplay: false
    };
    this.handleAddingKegToList = this.handleAddingKegToList.bind(this);
    this.handleShowingForm = this.handleShowingForm.bind(this);
  }

  handleAddingKegToList(newKeg) {
    const copyKegsList = this.state.kegsList.slice();
    copyKegsList.push(newKeg);
    this.setState({ kegsList: copyKegsList });
  }

  handleShowingForm() {
    this.setState({ toggleDisplay: !this.state.toggleDisplay });
  }

  render() {
    let toggleFormDisplay = null;
    if(this.state.toggleDisplay) {
      toggleFormDisplay = <AddKeg />;
    } else {
      toggleFormDisplay = null;
    }
    return(
      <div className="kegs-wrap">
        <button className="add-keg" onClick={this.handleShowingForm} type="button">Add a keg</button>
        {toggleFormDisplay}
        <h1>Available Kegs</h1>
        <style jsx>{`
            .kegs-wrap {
              width: 100%;
              padding: 1rem;
            }
            .add-keg {
              padding: 0.8rem 0.9rem;
              font-family: 'Ubuntu', sans-serif;
              font-weight: 700;
              border-radius: 10px;
              outline: 0;
              width: 20%;
              background-color: #00aadc;
              border-color: #0087be;
              color: #fff;
            }
            h1 {
              text-align: center;
            }
            .keg-list {
              display: flex;
              width: 90%;
              margin: 2rem auto 0;
              justify-content: space-between;
              flex-wrap: wrap;
            }
          `}</style>
        <div className="keg-list">
          {kegs.map((keg, i) =>
            <Keg {...keg}
              key={i}/>
          )}
        </div>
      </div>
    );
  }
}

export default KegList;
