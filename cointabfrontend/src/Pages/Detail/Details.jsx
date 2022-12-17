import React from 'react';
import { useSelector } from 'react-redux';
import "./Details.css";
const Details = () => {

  const user = useSelector(store=>store.User.UserData)
  // console.log(user);
  
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
    {
      user?.map((e)=>(
    <tr key={e.id} >
    <td>{e.first}</td>
    <td>{e.last}</td>
    <td>{e.email}</td>
    <td>{e.address}</td>
    <td>{e.balance}</td>

    </tr>

      ))
    }
  </tbody>
 
</table>
    </div>
  )
}

export default Details