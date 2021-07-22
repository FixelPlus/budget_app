import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import './Earned-and-spent.css';
import History from './History.js';
import DisplayDate from './DisplayDate.js';
import Spendings from './Spendings.js';
import Earnings from './Earnings.js';
import ListTransactions from './ListTransactions.js';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="./">
          {' '}
          My Profile{' '}
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/history">
          History{' '}
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/report">
          {' '}
          Report
        </NavLink>
        <a href="./"> My Profile </a>
        <a href="/history">History </a>
        <a href="/report"> Report</a>
      </nav>
      <DisplayDate />
      <div className="Earned-and-spent">
        <Route exact path="/" component={Spendings} />
        <Route
          exact
          path="/"
          component={() => <Earnings testProp="This is a test prop" />}
          // component= makes a brand new component (Bad for us)
          // going through the whole lifecycle: mount -> render -> unmount...
          // use component={component} if not passing props
        />
        <Route
          exact
          path="/history"
          render={() => <History historyPeriod="All transactions" />}
          // render= just re-rends but not re-mounts the component
          // no lifecycle traversal (Good for us)
          // use rende={component and props} if passing props
        />
      </div>
    </div>
  );
}

export default App;
