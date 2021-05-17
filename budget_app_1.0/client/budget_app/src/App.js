import React, {Fragment}from "react";
import './App.css';
import './Earned-and-spent.css';
import Top from './Top.js';
import Spendings from './Spendings.js';
import Earnings from './Earnings.js';
import ListTransactions from './ListTransactions.js';

function App() {
  return (
    <div className="App">
      <Top />
      <div className="Earned-and-spent">
      <Spendings />
      <Earnings />
      </div>
      <ListTransactions />
    </div>
  );
}

export default App;
