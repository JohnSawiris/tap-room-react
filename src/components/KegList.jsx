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
    this.handleToggleForm = this.handleToggleForm.bind(this);
  }//constructor

  handleAddingKegToList(newKeg) {
    const copyKegsList = Object.assign({}, this.state.kegsList, {
      [newKeg.id]: newKeg
    });
    this.setState({ kegsList: copyKegsList });
    this.handleToggleForm();
  }//handleAddingKegToList

  handleToggleForm() {
    this.setState({ toggleDisplay: !this.state.toggleDisplay });
  }//handleToggleForm

  render() {

    let toggleFormDisplay = null;
    (this.state.toggleDisplay) ? 
      toggleFormDisplay = <AddKeg 
        onAddingKegToList={this.handleAddingKegToList} 
        onSubmitToggle={this.handleShowingForm}/> :
      toggleFormDisplay = null;

    let toggleAddKegBtn = null;

    (!this.state.toggleDisplay) ?
      toggleAddKegBtn = <button className="add-keg" onClick={this.handleToggleForm} type="button">Add a keg</button> :
      toggleAddKegBtn = null;

    return(
      <div className="kegs-wrap">
        {toggleAddKegBtn}
        {toggleFormDisplay}
        <h1>Available Kegs</h1>
        <style global jsx>{`
          .add-keg {
            padding: 0.8rem 0.9rem;
            font-family: 'Ubuntu', sans-serif;
            font-weight: 700;
            border-radius: 10px;
            outline: 0;
            width: 20%;
            cursor: pointer;
            background-color: #00aadc;
            border-color: #0087be;
            color: #fff;
          }
        `}</style>
        <style jsx>{`
            .kegs-wrap {
              width: 100%;
              padding: 1rem;
            }
            h1 {
              text-align: center;
            }
            .keg-list {
              display: flex;
              width: 90%;
              margin: 2rem auto 0;
              justify-content: space-around;
              flex-wrap: wrap;
            }
          `}</style>
        <div className="keg-list">
          {Object.keys(this.state.kegsList).map(function(kegId) {
            let keg = this.state.kegsList[kegId];
            return <Keg {...keg}
              key={kegId} />;
            
          }.bind(this))}
        </div>
      </div>
    );
  }//render
}

export default KegList;
