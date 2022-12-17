import React from 'react';
import "./Details.css";
const Details = () => {
  return (
    <div>
      <h1>User Details</h1>

<table id="user">
  <thead>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Balance</th>
  </thead>
  <tbody>
    <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>23232</td>

    </tr>
  </tbody>
 
</table>
    </div>
  )
}

export default Details