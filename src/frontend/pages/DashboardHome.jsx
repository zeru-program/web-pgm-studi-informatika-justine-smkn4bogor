import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import Nav from "../components/SidebarDashboard";
import FetchAccountData from '../../backend/FetchAccountData';
import useCmsData from '../../backend/UseCmsData';
import FetchBeritaData from '../../backend/FetchBeritaData';
import LineChart from "../components/LineChart";

const ContentHome = () => {
    const { dataAccount } = FetchAccountData();
    const { dataBerita } = FetchBeritaData();
    const { dataCms } = useCmsData();
    const accLength = dataAccount.length;
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="d-flex flex-column">
            <h1>Welcome to FTS UIKA Dashboard</h1>
            <p className="text-muted">Today's Date: {currentDate}</p>
            <p className="mb-4">Here you’ll find an overview of key metrics and recent updates for the university.</p>
            
            <div className="w-100 d-flex flex-wrap gap-3">
                {/* Key Statistics */}
                <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className="m-0 fw-bold">
                        <CountUp end={accLength} scrollSpyOnce={true} enableScrollSpy={true} /> 
                    </h1>
                    <p className="m-0">Accounts</p>
                </div>
                <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className="m-0 fw-bold">
                        <CountUp end={dataCms["about3_jumlahDosen"] || 78} scrollSpyOnce={true} enableScrollSpy={true} /> 
                    </h1>
                    <p className="m-0">Faculty Members</p>
                </div>
                <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className="m-0 fw-bold">
                        <CountUp end={dataCms["about2_jumlahMahasiswa"] || 20000} scrollSpyOnce={true} enableScrollSpy={true} /> 
                    </h1>
                    <p className="m-0">Students</p>
                </div>
                <div className="box-info-dashboard rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className="m-0 fw-bold">
                        <CountUp end={dataBerita.length} scrollSpyOnce={true} enableScrollSpy={true} /> 
                    </h1>
                    <p className="m-0">News Articles</p>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="d-flex mt-3 flex-column">
                <h5 className="mt-4">Recent Activity</h5>
                <ul className="list-unstyled">
                    {dataBerita.slice(0, 3).map((item, index) => (
                        <li key={index} className="my-2">
                            <Link to={`/berita/${item.id_berita}`} className="text-decoration-none">
                                {item.title}
                            </Link>
                            <p className="text-muted small">{item.tanggal}</p>
                        </li>
                    ))}
                </ul>
                <Link to="#" className="btn-sec-dash text-center text-decoration-none p-2">View All News</Link>
            </div>

            {/* Website Statistics */}
            <div className="d-flex mt-3 flex-column">
		<h5 className="mt-3">Website Statistics</h5>
                <LineChart />
            </div>

            {/* Quick Links */}
            <div className="d-flex mt-3 flex-column">
                <h5 className="mt-4">Quick Links</h5>
                <div className="d-flex gap-3 flex-wrap">
                    <Link to="#" className="btn-sec-dash text-decoration-none p-2">Courses</Link>
                    <Link to="#" className="btn-sec-dash text-decoration-none p-2">Class Schedule</Link>
                    <Link to="#" className="btn-sec-dash text-decoration-none p-2">Admissions</Link>
                    <Link to="#" className="btn-sec-dash text-decoration-none p-2">Events</Link>
                </div>
            </div>
        </div>
    );
}

const DashboardHome = () => {
    if (!localStorage.getItem("hasLogin") && localStorage.getItem("role") !== "admin") {
        window.location.href = "/";
    }
    return (
        <>
            <Nav content={<ContentHome />} />
        </>
    );
}

export default DashboardHome;
