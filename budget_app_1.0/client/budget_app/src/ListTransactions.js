import React, { Fragment, useEffect, useState } from 'react';
 

    const Listbudget = () => {

        const [budget, setBudget] = useState([]); // default array  

    const getbudget = async() => {
        try {
            
            const response = await fetch("http://localhost:5010/budget");
            const jsonData = await response.json();
            console.log(jsonData)
            setBudget(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => { //useEffect is to make requests, seems like a componentDidMount() in a class component
        getbudget();
    }, []);

    return <Fragment><table className="table mt-5 text-center">
    <thead>
      <tr>
      <th >#</th>
      <th >Amount</th>
      <th >Type( 1 = earned, 0 = spent)</th>
      <th >Category</th>
      <th >Category Name</th>
      </tr>
    </thead>
    <tbody>
        {budget.map(budget => (
    <tr key={budget.transaction_id}>
        <td>{budget.transaction_id}</td>
        <td>{budget.amount}</td>
        <td>{budget.type}</td>
        <td>{budget.category_id}</td>
    </tr>
) )}
    </tbody>
  </table></Fragment>;
}
export default Listbudget;

      