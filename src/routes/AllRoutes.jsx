import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Browse from '../pages/Browse'
import PostAd from '../pages/PostAd'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/postAd' element={<PostAd />} />
    </Routes>
  )
}

export default AllRoutes