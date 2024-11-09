import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import F404 from "./pages/F404"
import Join from "./pages/Join"
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register"
import Logout from "./pages/Logout"
import DashboardHome from "./pages/DashboardHome"
import DashboardCms from "./pages/DashboardCms"
import DashboardPrestasi from "./pages/DashboardPrestasi"


function RouterApp() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bergabung' element={<Join/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/dashboard' element={<DashboardHome/>} />
        <Route path='/dashboard/cms' element={<DashboardCms/>} />
        <Route path='/dashboard/prestasi' element={<DashboardPrestasi/>} />
        <Route path='*' element={<F404/>} />
      </Routes>
    </Router>
    </>
  )
}

export default RouterApp
