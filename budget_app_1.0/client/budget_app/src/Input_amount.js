import React, { Component } from 'react'

class Input_amount extends Component {
    constructor(props) {
        super(props);
        this.state = {amount: ''};

        this.calculation1 = this.calculation1.bind(this);
        this.calculation2 = this.calculation2.bind(this);
        this.calculation3 = this.calculation3.bind(this);
        this.calculation4 = this.calculation4.bind(this);
        this.calculation5 = this.calculation5.bind(this);
        this.calculation6 = this.calculation6.bind(this);
        this.calculation7 = this.calculation7.bind(this);
        this.calculation8 = this.calculation8.bind(this);
        this.calculation9 = this.calculation9.bind(this);
        this.calculation0 = this.calculation0.bind(this);
        this.calculation_period = this.calculation_period.bind(this);
        
    }

    calculation1(st){
        return this.setState(st =>{return {amount: st.amount + 1 }});
    }
    calculation2(st){
        return this.setState(st =>{return {amount: st.amount + 2 }});
    }
    calculation3(st){
        return this.setState(st =>{return {amount: st.amount + 3}});
    }
    calculation4(st){
        return this.setState(st =>{return {amount: st.amount + 4}});
    }
    calculation5(st){
        return this.setState(st =>{return {amount: st.amount + 5}});
    }
    calculation6(st){
        return this.setState(st =>{return {amount: st.amount + 6}});
    }
    calculation7(st){
        return this.setState(st =>{return {amount: st.amount + 7}});
    }
    calculation8(st){
        return this.setState(st =>{return {amount: st.amount + 8}});
    }
    calculation9(st){
        return this.setState(st =>{return {amount: st.amount + 9}});
    }
    calculation0(st){
        return this.setState(st =>{return {amount: st.amount + 0}});
    }
    calculation_period(st){
        return this.setState(st =>{return {amount: st.amount + '.'}});
    }

  

    render(){
        return (
        <div>
             <div  >
            <h3>
            Input the amount
            </h3>
            <form name="calculator" >
         <table>
             <thead>
             <tr>
              <th>
                 <input type="text" name="display" id="display" value={this.state.amount} disabled />
              </th>{/*{parseFloat(this.state.amount).toFixed(2)} */}
           </tr>
             </thead>
             <tbody>
             <tr>
              <td><input type="button" name="one" value="1" onClick={this.calculation1} /></td>
              <td><input type="button" name="two" value="2" onClick={this.calculation2} /></td>
              <td><input type="button" name="three" value="3" onClick={this.calculation3} /></td>
           </tr>
           <tr>
              <td><input type="button"  name="four" value="4" onClick={this.calculation4} /></td>
              <td><input type="button"  name="five" value="5" onClick={this.calculation5} /></td>
              <td><input type="button"  name="six" value="6" onClick={this.calculation6} /></td>
           </tr>
           <tr>
           <td><input type="button"  name="seven" value="7" onClick={this.calculation7} /></td>
              <td><input type="button"  name="eight" value="8" onClick={this.calculation8} /></td>
              <td><input type="button"  name="nine" value="9" onClick={this.calculation9} /></td>
              
           </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><input type="button"  name="period" value="." onClick={this.calculation_period} /></td>
                    <td><input type="button"  name="zero" value="0" onClick={this.calculation0} /></td>
               </tr>
            </tfoot>
           
        </table>
        <input type="submit" value="Submit"></input>
        <button onClick={this.props.triggerOnSubmit}>add</button>
      </form>
            </div>
        </div>
          );
    }
}

export default Input_amount;