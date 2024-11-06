import React from "react"
import { Link } from "react-router-dom"; 

const Nav = () => {
    return (
        <>
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "250px", height: "100vh" }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">Dashboard</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page">
            <i className="bi-house-door"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-link text-dark">
            <i className="bi-person"></i>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/settings" className="nav-link text-dark">
            <i className="bi-gear"></i>
            Settings
          </Link>
        </li>
        <li>
          <Link to="/logout" className="nav-link text-dark">
            <i className="bi-box-arrow-right"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
    </>
   )
}

const DashboardHome = () => {
    return (
        <>
        <Nav />
        </>
    )
}

export default DashboardHome