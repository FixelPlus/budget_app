import React, { Component } from 'react'
import './Top.css';
import DisplayDate from './DisplayDate.js';
import History from './History.js';
import Report from './Report.js';
class Top extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            
            <div className='Top-component'>
              <div> < DisplayDate /> </div>
              <div className = "Report-and-history"> 
                <Report /> 
                <History />
              </div>
            </div>
            
      
          );
    }
}

export default Top;