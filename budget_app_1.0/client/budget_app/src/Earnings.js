import React, { Component, Fragment } from 'react';
import './Earnings.css';
import Select from 'react-select';

const options = [
  { value: '', label: '' },
  { value: '', label: '' },
  { value: '', label: '' },
  { value: '', label: '' },
  { value: '', label: '' },
  { value: '', label: '' },
  { value: '', label: '' },
  { value: '', label: '' }
];

class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earned: 0,
      total: 0,
      selectedCategory: 0,
      selectedCategoryName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.display = this.display.bind(this);
    this.postTransaction = this.postTransaction.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  //   handleChange(){
  //     this.setState({selectedCategory: this.state.selectedCategory + options.});
  //     console.log(this.state.selectedCategory);
  //  }
  handleChange = (selectedCategory, selectedCategoryName) => {
    this.setState({ selectedCategory, selectedCategoryName });
  };

  display = event => {
    this.setState({ earned: event.target.value });
  };

  async postTransaction(e) {
    e.preventDefault();
    try {
      const response1 = await fetch('http://localhost:5010/budget', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: this.state.earned,
          type: 1,
          category_id: this.state.selectedCategory.value,
          category_name: this.state.selectedCategoryName.value
        })
      });
      const response2 = await fetch('http://localhost:5010/budget/total', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response2.json();
      console.log('Post response3', response1);
      console.log('GET response3', data[0]);
      console.log('GET response3', data[0].sum);
      this.setState({ total: data[0].sum });
    } catch (error) {
      console.error(error.message2);
    }
  }

  async getTotal() {
    try {
      const response3 = await fetch('http://localhost:5010/budget/total', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response3.json(); // store in the data const whatever we recieved from the server
      console.log('GET response3', data[0].sum);
      this.setState({ total: data[0].sum });
    } catch (error) {
      console.error(error.message2);
    }
  }

  async getCategories() {
    try {
      const response3 = await fetch(
        'http://localhost:5010/budget/earnings_categories',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      );
      const data = await response3.json();

      const categories_id = data.map(element => {
        return element.earn_cat_id;
      });
      const categories_name = data.map(element => {
        return element.category_name;
      });

      options.forEach((el, index) => {
        el.value = categories_id[index];
      });
      options.forEach((el, index) => {
        el.label = categories_name[index];
      });
    } catch (error) {
      console.error(error.message2);
    }
  }
  //The lifecycle method componentDidMount is called right after the first render completes
  // use this function to display total every time page is loaded
  componentDidMount() {
    this.getTotal();
    this.getCategories();
  }

  render() {
    const { selectedCategory } = this.state;
    const { selectedCategoryName } = this.state;
    return (
      <Fragment>
        <div>
          <div className="Earned-window">
            <h3>Earned</h3>
            <div className=" Earned-amount ">
              <h2>{this.state.total}</h2>
            </div>
            <form onSubmit={this.postTransaction}>
              <div className="container">
                <div className="grid">
                  <div className="padButton dis">
                    <input
                      type="text"
                      placeholder="0"
                      onChange={this.display}
                    ></input>
                    {/**defaultValue = {this.state.earned} */}
                  </div>
                  <button className="padButton add">add</button>
                  <Select
                    options={options}
                    value={selectedCategory}
                    label={selectedCategoryName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Earnings;
