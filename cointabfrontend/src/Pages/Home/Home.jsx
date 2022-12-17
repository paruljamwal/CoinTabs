import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allUserDelete, fetchUser } from '../../redux/user/useraction';
import {useNavigate} from "react-router-dom";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(store=>store.User.UserData)
  const {loading,error} = useSelector(store=>store.User)
  // console.log(user);
  const fetchUserData=()=>{
    dispatch(fetchUser())
  }

  // delete user...
  const DeleteData=()=>{
    dispatch(allUserDelete())
  }

  const UserDetails=()=>{
   navigate(`/user/details`);
  }

  useEffect(()=>{
  },[dispatch])
 
  if(loading){
    return <img src="https://gifimage.net/wp-content/uploads/2018/04/loading-animated-gif-transparent-background-9.gif" alt="" />
  }

  if(error){
    return <div>ERROR....</div>
  }
  return (
    <div className='main' >
      <button className='btn'  onClick={fetchUserData} >Fetch User</button> 
      <button className='btn'  onClick={DeleteData}>Delete User</button>
      <button className='btn'  onClick={UserDetails} >User Details </button>
    
      
      <table id="user">
        { users?.user ? (
             <thead>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Email</th>
             <th>Address</th>
             <th>Balance</th>
   
           </thead>
        ) : ""}
     
        {users?.user?.map((e) => ( 
        <tbody>
      
            <tr key={e._id}>
              <td>{e.first}</td>
              <td>{e.last}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>{e.balance}</td>
            </tr>
        </tbody>
      ))}
      </table>

    
    </div>

  )
}

export default Home;