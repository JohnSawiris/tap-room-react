import React from 'react';
import Keg from './Keg';
import AddKeg from './AddKeg';
import kegs from './kegsData';

class KegList extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      kegsList: kegs,
      toggleDisplay: false,
      fadeStyles :{
        opacity: 1,
        transition: 'all 2s ease',
      }
    };
    this.handleAddingKegToList = this.handleAddingKegToList.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handlePouringPint = this.handlePouringPint.bind(this);
    this.handlePouringGrowler = this.handlePouringGrowler.bind(this);
  }//constructor

  handleAddingKegToList(newKeg) {
    let copyKegsList = Object.assign({}, this.state.kegsList, {
      [newKeg.id]: newKeg
    });
    this.setState({ kegsList: copyKegsList });
    this.handleToggleForm();
  }//handleAddingKegToList

  handlePouringPint(kegId) {
    let copyKegsList = Object.assign({}, this.state.kegsList);
    copyKegsList[kegId].pints--;
    this.setState({kegsList: copyKegsList});
  }//handlePouringPint

  handlePouringGrowler(kegId) {
    let copyKegsList = Object.assign({}, this.state.kegsList);
    copyKegsList[kegId].pints -= 2;
    this.setState({kegsList: copyKegsList});
  }//handlePouringGrowler

  handleToggleForm() {
    let toggle = this.state.toggleDisplay;
    this.setState({ toggleDisplay: !toggle });
  }//handleToggleForm

  render() {

    let toggleFormDisplay = null;
    (this.state.toggleDisplay) ?
      toggleFormDisplay = <AddKeg
        onAddingKegToList={this.handleAddingKegToList}
        toggle={this.handleToggleForm}/> :
      toggleFormDisplay = null;

    let toggleAddKegBtn = null;

    (!this.state.toggleDisplay) ?
      toggleAddKegBtn = <button className="add-keg" onClick={this.handleToggleForm} type="button">Add a keg</button> :
      toggleAddKegBtn = null;

    return(
      <div className="kegs-wrap" style={this.state.fadeStyles}>
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
              onPouringPint={this.handlePouringPint}
              onPouringGrowler={this.handlePouringGrowler}
              key={kegId} />;

          }.bind(this))}
        </div>
      </div>
    );
  }//render
}

export default KegList;
