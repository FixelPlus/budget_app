import React, { Component } from 'react'
import './Top.css';

class DisplayDate extends Component {
    constructor(props) {
        super(props);
        let today = new Date()
        let date = today.getFullYear() + '-' 
                                   + (today.getMonth() 
                                   + 1) + '-' + today.getDate();
        this.state = {
            currentDate: date
        }
    }

    render(){
        return (
            <div className='Date-component'>
              <p>
                { this.state.currentDate }
              </p>
            </div>
      
          );
    }
}

export default DisplayDate;