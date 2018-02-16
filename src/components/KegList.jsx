import React from 'react';
import Keg from './Keg';

import kegs from './kegsData';

class KegList extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      kegsList: kegs
    }
  }

  handleAddingKegToList(newKeg) {
    const copyKegsList = this.state.kegsList.slice();
    this.setState({ kegsList: copyKegsList });
  }

  render() {
    return(
      <div className="kegs-wrap">
        <h1>Available Kegs</h1>
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
