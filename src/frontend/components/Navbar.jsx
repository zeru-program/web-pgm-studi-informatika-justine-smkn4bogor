import React, { useState } from "react";
import "../../Navbar.css";

const Navbar = () => {
    const [statusNav, setStatusNav] = useState(true)
    const [imgNav, setImgNav] = useState("/nav.svg")
    const [padBot, setPadBot] = useState("8px")
    var hasLogin = false
    if (localStorage.getItem("hasLogin")) {
        hasLogin = true
    } else {
        hasLogin = false
    }
    
    const handleNav = () => {
        if (statusNav) {
            setImgNav("/nav-close.svg")
            setPadBot("0")
        } else {
            setImgNav("/nav.svg")
            setPadBot("8px")
        }
        setStatusNav(!statusNav)
    }
    
    return (
    <>
    <header className="header-nav">
        <nav className="navbar navbar-expand-lg" style={{paddingBottom: padBot}}>
            <div className="container-fluid p-0">
                <a className="navbar-brand d-flex gap-2 justify-content-center align-items-center mx-3 px-1" href="/"><img src="/FTS.png" style={{width: "35px"}} id="img-fts-nav" /></a>
                <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={!statusNav} aria-label="Toggle navigation" onClick={handleNav}>
                    <img src={imgNav} style={{width: "25px"}} id="menu-nav" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About us
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#ab-desk">Deskripsi</a></li>
                                <li><a className="dropdown-item" href="#ab-vm">Visi misi</a></li>
                                <li><a className="dropdown-item" href="#ab-struktur">Sturktur</a></li>
                                <li><a className="dropdown-item" href="#ab-prestasi">Prestasi</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#berita">Berita</a>
                        </li>
                        <li className="nav-item" style={{ display: hasLogin ? "none" : "block"}}>
                            <a className="nav-link" href="/login">Login/Register</a>
                        </li>
                        <li className="nav-item" style={{ display: hasLogin ? "block" : "none"}}>
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
    )
}


export default Navbar;
