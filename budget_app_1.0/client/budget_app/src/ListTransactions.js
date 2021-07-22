import React, { Fragment, useEffect, useState } from 'react';
import './ListTransactions.css';
const Listbudget = () => {
  const [budget, setBudget] = useState([]); // default array

  //const API_URL = process.env.REACT_APP_API_URL;
  const getbudget = async () => {
    try {
      const response = await fetch('http://localhost:5010/budget');
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
      <div class="tbl-header">
        <table
          className="table mt-5 text-center"
          cellpadding="0"
          cellspacing="0"
          border="0"
        >
          <thead>
            <tr>
              <th>
                <div className="">Transaction number |</div>
              </th>
              <th>Amount |</th>
              <th>Type( 1 = earned, 0 = spent) |</th>
              <th>Category id|</th>
              <th>Category Name |</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            {budget.map(budget => (
              <tr key={budget.transaction_id}>
                <td>{budget.transaction_id}</td>
                <td>{budget.amount}</td>
                <td>{budget.type}</td>
                <td>{budget.category_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
export default Listbudget;
