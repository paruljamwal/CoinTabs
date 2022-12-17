import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Details from '../Pages/Detail/Details';
import Home from '../Pages/Home/Home';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/:id' element={<Details/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes