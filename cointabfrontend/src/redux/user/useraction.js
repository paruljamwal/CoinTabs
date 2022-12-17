


import { GET_USER, USER_ERROR, USER_LOADING } from "./userActionType"


export const getUser=(payload)=>{
    return {
        type: GET_USER,
        payload
    }
}


const loading=()=>{
    return{
        type: USER_LOADING
    }
}

const Error=()=>{
    return{
        type:USER_ERROR
    }
}

// https://cointabb.up.railway.app/user  

export const fetchUser=(payload)=>(dispatch)=>{
  dispatch(loading())
  return fetch(`https://cointabb.up.railway.app/user`)
  .then(r=>(r.json()))
  .then(d=>dispatch(getUser(d.user)))
  .catch(e=>dispatch(Error()))
}




