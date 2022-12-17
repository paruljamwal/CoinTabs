


import { DELETE_USER, GET_USER, USER_ERROR, USER_LOADING } from "./userActionType"


export const getUser=(payload)=>{
    return {
        type: GET_USER,
        payload
    }
}

const deleteUser =(payload)=>{
    return{
        type: DELETE_USER,
        payload
    }
}

const loading=()=>{
    return{
        type: USER_LOADING
    }
}

const Error=(e)=>{
    return{
        type:USER_ERROR,
        e
    }
}

// https://cointabb.up.railway.app/user  

export const fetchUser=(payload)=>(dispatch)=>{
  dispatch(loading())
  return fetch(`https://cointabb.up.railway.app/user`)
  .then(r=>(r.json()))
  .then(d=>dispatch(getUser(d)))
  .catch(e=>dispatch(Error()))
}

export const searchUser=(id)=>(dispatch)=>{
    dispatch(loading())
    return fetch(`https://cointabb.up.railway.app/user/${id}`)
    .then(r=>(r.json()))
    .then(d=>dispatch(getUser(d)))
    .catch(e=>dispatch(Error()))
  }
  




export const fetchUserData=(page,limit)=>(dispatch)=>{
    dispatch(loading())
    return fetch(`https://cointabb.up.railway.app/user?page=${page}&limit=${limit}`)
    .then(r=>(r.json()))
    .then(d=>dispatch(getUser(d)))
    .catch(e=>dispatch(Error()))
  }
  
export const allUserDelete=()=>(dispatch)=>{
    dispatch(loading())
    return fetch(`https://cointabb.up.railway.app/user/delete`)
    .then(d=>dispatch(getUser(d)))
    .catch(e=>dispatch(Error(e)))
}

