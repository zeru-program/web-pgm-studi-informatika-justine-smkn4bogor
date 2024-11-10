import React from "react"
import { Link } from "react-router-dom"; 
import CountUp from 'react-countup';
import Nav from "../components/SidebarDashboard"

const ContentHome = () => {
  return(
    <>
    <h1>Welcome to FTS UIKA Dashboard</h1>
    <div className="w-100 d-flex flex-wrap gap-3">
      <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
        <h1 className="m-0 fw-bold">
          <CountUp end={3} scrollSpyOnce={true} enableScrollSpy={true} /> 
        </h1>
        <p className="m-0">account</p>
      </div>
      <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
        <h1 className="m-0 fw-bold">
          <CountUp end={3} scrollSpyOnce={true} enableScrollSpy={true} /> 
        </h1>
        <p className="m-0">jumlah dosen</p>
      </div>
      <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
        <h1 className="m-0 fw-bold">
          <CountUp end={3} scrollSpyOnce={true} enableScrollSpy={true} /> 
        </h1>
        <p className="m-0">jumlah mahasiswa</p>
      </div>
      <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
        <h1 className="m-0 fw-bold">
          <CountUp end={3} scrollSpyOnce={true} enableScrollSpy={true} /> 
        </h1>
        <p className="m-0">berita</p>
      </div>
      <div className="d-flex flex-column">
       <h5 className="mt-3">Data statistik website</h5>
       <p>comming soon..</p>
      </div>
    </div>
    </>
  )
}

const DashboardHome = () => {
    return (
        <>
        <Nav content={<ContentHome />} />
        </>
    )
}

export default DashboardHome