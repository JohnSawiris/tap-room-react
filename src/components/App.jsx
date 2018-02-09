import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import KegList from './KegList';
import Welcome from './Welcome';

function App() {
  return(
    <div className="container">
      <style global jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700');
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: 'Montserrat', sans-serif;
            background-color: #eee;
            color: #222;
          }
          .container {
            display: flex;
            height: 100%;
            flex-direction: column;
            width: 80%;
            margin: auto;
          }
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/kegs' component={KegList} />
      </Switch>
    </div>
  );
}

export default App;
