import React, { Component } from 'react';
import './Top.css';
import ListTransactions from './ListTransactions.js';

class Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Report-component">
        <h1>this is the report</h1>
      </div>
    );
  }
}

export default Report;
