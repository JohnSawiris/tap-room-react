import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import KegList from './KegList';
import Welcome from './Welcome';

function App() {
  return(
    <div className="container">
      <style global jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Ubuntu:400,500');
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: 'Montserrat', sans-serif;
            background-color: #2e4453;
            color: #eee;
          }
          .container {
            display: flex;
            flex-direction: column;
            width: 80%;
            margin: auto;
          }
          @media (max-width: 950px) {
            .container {
              width: 100%;
              padding: 1rem;
              margin: 0;
            }
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
