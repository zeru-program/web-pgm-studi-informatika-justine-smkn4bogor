import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"; 
import CountUp from 'react-countup';
import Nav from "../components/SidebarDashboard"
import FetchAccountData from '../../backend/FetchAccountData'
import useCmsData from '../../backend/UseCmsData';
import FetchBeritaData from '../../backend/FetchBeritaData';

const ContentHome = () => {
    const { dataAccount } = FetchAccountData()
    const { dataBerita } = FetchBeritaData()
    const { dataCms } = useCmsData()
    const accLength = dataAccount.length
    
  return(
    <div className="d-flex flex-column">
    <h1>Welcome to FTS UIKA Dashboard</h1>
    <div className="w-100 d-flex flex-wrap gap-3">
      <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
        <h1 className="m-0 fw-bold">
          <CountUp end={accLength} scrollSpyOnce={true} enableScrollSpy={true} /> 
        </h1>
        <p className="m-0">account</p>
      </div>
      <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
        <h1 className="m-0 fw-bold">
          <CountUp end={dataCms["about3_jumlahDosen"] || 78} scrollSpyOnce={true} enableScrollSpy={true} /> 
        </h1>
        <p className="m-0">jumlah dosen</p>
      </div>
      <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
        <h1 className="m-0 fw-bold">
          <CountUp end={dataCms["about2_jumlahMahasiswa"] || 20000} scrollSpyOnce={true} enableScrollSpy={true} /> 
        </h1>
        <p className="m-0">jumlah mahasiswa</p>
      </div>
      <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
        <h1 className="m-0 fw-bold">
          <CountUp end={dataBerita.length} scrollSpyOnce={true} enableScrollSpy={true} /> 
        </h1>
        <p className="m-0">berita</p>
      </div>
    </div>
      <div className="d-flex mt-3 flex-column">
       <h5 className="mt-3">Data statistik website</h5>
       <p>comming soon..</p>
      </div>
    </div>
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