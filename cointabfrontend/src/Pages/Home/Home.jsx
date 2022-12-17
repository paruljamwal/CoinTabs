import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from '../../redux/user/useraction';
import {useNavigate} from "react-router-dom";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const user = useSelector(store=>store.User.UserData)
  // console.log(user);
  const fetchUserData=()=>{
    dispatch(fetchUser())
  }

  // delete user...
  const DeleteData=()=>{
    console.log("del");

  }

  const UserDetails=()=>{
   navigate(`/user/details`);
  }

  useEffect(()=>{
  },[])

  return (
    <div className='main' >
      <button className='btn'  onClick={fetchUserData} >Fetch User</button> 
      <button className='btn'  onClick={DeleteData}>Delete User</button>
      <button className='btn'  onClick={UserDetails} >User Details </button>
    </div>
  )
}

export default Home;