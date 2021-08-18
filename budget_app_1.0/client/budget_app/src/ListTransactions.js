import React, { Fragment, useEffect, useState } from 'react';
import './ListTransactions.css';
const Listbudget = () => {
  const [budget, setBudget] = useState([]); // default array
  //const API_URL = process.env.REACT_APP_API_URL;
  const getbudget = async () => {
    try {
      const response = await fetch('http://localhost:5010/budget');
      console.log(response);
      const jsonData = await response.json();
      console.log(jsonData);
      setBudget(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  // //Replacing componentDidMount, We use the useEffect hook with the second argument of [].
  //  The second argument of the useState hook is normally an array of a state(s) that changes,
  //   and useEffect will be only called on these selected changes. But when it’s an empty array like this example,
  //    it will be called once on mounting. This is a perfect replacement for a componentDidMount.
  useEffect(() => {
    getbudget();
    console.log('Bye');
  }, []);

  return (
    <Fragment>
      <div class="tbl-content">
        <table
          className="sticky mt-5 text-center"
          cellpadding="0"
          cellspacing="0"
          border="0"
        >
          <thead className="tbl-header">
            <tr>
              <th>Amount</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>
            {budget.map(budget => (
              <tr>
                <td>{budget.amount}</td>
                <td>{budget.category_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
export default Listbudget;
