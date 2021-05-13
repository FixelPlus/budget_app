import React, { Component } from 'react'
import './Earnings.css';
import Input_amount from './Input_amount';

class Earnings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            earned: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.display = this.display.bind(this);
    }

    handleSubmit(event){
        this.setState(event =>{return { earned: event.earned +100 }});
   }

   display(symbol){
    this.setState(() => {return {earned: this.state.earned + symbol}})
   }

    render(){
        return (
        <div>
            <div className = "Earned-window">
            <h3>
            Earned
            </h3>
            <div className= " Earned-amount ">
            <input type="text" value = { parseFloat(this.state.earned).toFixed(2)} placeholder="0" disabled></input>
            </div>
            <div className="container">
              <div className="grid">
              <div className="padButton dis">
                <input type="text" value = {this.state.earned} placeholder="0" disabled></input>
              </div>
                <div onClick={this.display}className="padButton one">1</div>
                <div onClick={this.display}className="padButton two">2</div>
                <div onClick={this.display}className="padButton three">3</div>
                <div onClick={this.display}className="padButton four">4</div>
                <div onClick={this.display}className="padButton five">5</div>
                <div onClick={this.display}className="padButton six">6</div>
                <div onClick={() => this.display("7")} className="padButton seven">7</div>
                <div onClick={this.display}className="padButton eight">8</div>
                <div onClick={this.display}className="padButton nine">9</div>
                <div onClick={this.display}className="padButton zero">0</div>
                <div onClick={this.display}className="padButton dot">.</div>
                <button className="padButton add">add</button>
              </div>
            </div>

            </div>
        </div>
          );
    }
}

export default Earnings;