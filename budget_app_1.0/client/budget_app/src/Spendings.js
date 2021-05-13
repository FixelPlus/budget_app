import React, { Component } from 'react'
import './Spendings.css';
import Input_amount from './Input_amount';

class Spendings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spent: 0.00
        }
    }

    render(){
        return (
        <div>
            <div className = "Spent-window">
            <h3>
            Spent
            </h3>
            <div className= " Spent-amount ">
                {parseFloat(this.state.spent).toFixed(2)}
            </div>
            <Input_amount />
            </div>
        </div>
          );
    }
}

export default Spendings;