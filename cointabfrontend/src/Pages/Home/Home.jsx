import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from '../../redux/user/useraction';


const Home = () => {
  const dispatch = useDispatch();

  // const user = useSelector(store=>store.User.UserData)
  // console.log(user);
  const fetchUserData=()=>{
    dispatch(fetchUser())
  }

  // delete user...
  const DeleteData=()=>{

  }

  const UserDetails=()=>{
    
  }

  useEffect(()=>{
  },[])

  return (
    <div>
      <button onClick={fetchUserData} >Fetch User</button> 
      <button>Delete User</button>
      <button>User Details </button>
    </div>
  )
}

export default Home;