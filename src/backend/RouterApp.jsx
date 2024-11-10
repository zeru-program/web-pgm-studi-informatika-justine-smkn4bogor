import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../frontend/pages/Home"
import F404 from "../frontend/pages/F404"
import Join from "../frontend/pages/Join"
import LoginPage from "../frontend/pages/LoginPage"
import Register from "../frontend/pages/Register"
import Logout from "../frontend/pages/Logout"
import DashboardHome from "../frontend/pages/DashboardHome"
import DashboardCms from "../frontend/pages/DashboardCms"
import DashboardPrestasi from "../frontend/pages/DashboardPrestasi"
import DashboardBerita from "../frontend/pages/DashboardBerita"


function RouterApp() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/berita/:id' element={<Home/>} />
        <Route path='/bergabung' element={<Join/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/dashboard' element={<DashboardHome/>} />
        <Route path='/dashboard/cms' element={<DashboardCms/>} />
        <Route path='/dashboard/prestasi' element={<DashboardPrestasi/>} />
        <Route path='/dashboard/berita' element={<DashboardBerita/>} />
        <Route path='*' element={<F404/>} />
      </Routes>
    </Router>
    </>
  )
}

export default RouterApp
