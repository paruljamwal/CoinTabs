import React from "react";
import { useSelector } from "react-redux";
import "./Details.css";
const Details = () => {
  
  const users = useSelector((store) => store.User.UserData);
  console.log(users.totalPages);

  return (
    <div>
      <h1>User Details</h1>
      <div  className="container">
        <button className="btnn">First</button>
        <button className="btnn">Prev</button>
        <select>
          <option value="">select limit</option> 
          <option value="10">10</option> 
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option> 
          <option value="50">50</option>
          <option value="60">60</option>
        </select>
        <button className="btnn">Next</button> 
        <button className="btnn">Last</button>
      </div>
      <table id="user">
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Balance</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {users?.user?.map((e) => (
            <tr key={e.id}>
              <td>{e.first}</td>
              <td>{e.last}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>{e.balance}</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>

    
    </div>
  );
};

export default Details;
