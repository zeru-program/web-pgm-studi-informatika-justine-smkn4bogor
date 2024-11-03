import React, { useState, useRef } from 'react';
import Navbar from "../components/Navbar"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation";

const HeroBanner = () => {
    return (
      <>
        <header className="w-100 hero-home align-items-center flex-wrap d-flex">
            <div className="text-light container justify-content-center d-flex flex-column" style={{width: "auto",height: "100%"}}>
                <h1 className="fw-bold">Lorem ipsum.</h1>
                <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
            <div className="py-4 container p-0 text-pm section-video d-flex flex-column" style={{width: "330px", height: "auto", background: "#DFEEEA", zIndex: "99", borderRadius: "25px"}}>
                <h1 className="fw-bold container">UIKA Bogor.</h1>
                <p className="container">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima necessitatibus inventore error.</p>
                <video autoPlay muted controls src="/video.mp4" className="my-3"></video>
                <a className="container" href="#ab-prestasi">Lihat prestasi kami <i className="bi bi-arrow-right"></i></a>
            </div>
        </header>
      </>
    )
}

const About = () => {
  return (
      <section className="d-flex flex-column about-section mb-4">
          <div className="container d-flex flex-column my-3">
          <h1 className="text-pm fw-bold m-0">About PSTI</h1>
          <p className="m-0 text-pm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut repellendus corporis sequi fugit illo, dolor eaque. Praesentium blanditiis molestiae oomn.. baca selengkapnya</p>
          </div>
          <div className="w-100 mt-4" style={{height: "150px", background: "url('/bdrop-uika3.jpg') center center", backgroundSize: "cover"}}></div>
      </section>
  )
}

const VisiMisi = () => {
  return (
      <section className="d-flex flex-column visimisi-section  pt-5 text-center text-pm bg-scm" style={{marginTop: "80px"}}>
          <div className="d-flex flex-column">
              <h1 className="m-0 fw-bold">Visi</h1>
              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, ducimus.</p>
              <h1 className="m-0 fw-bold">Misi</h1>
              <div className="w-100 mb-5 mt-2 text-light d-flex gap-3 overflow-x-auto">
                  <div className="box-misi py-2 container mx-2 d-flex flex-column ">
                      <span className="fw-bold">One.</span>
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam.</p>
                  </div>
                  <div className="box-misi py-2 container d-flex flex-column ">
                      <span className="fw-bold">Two.</span>
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam.</p>
                  </div>
                  <div className="box-misi py-2 container d-flex flex-column ">
                      <span className="fw-bold">Three.</span>
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam.</p>
                  </div>
              </div>
              <h1 className="m-0 text-pm2 fw-bold">Tujuan</h1>
              <div className="w-100 mb-5 mt-2 text-light flex-wrap justify-content-center d-flex gap-3">
                  <div className="box-tujuan justify-content-center align-items-center container mx-2 d-flex flex-column ">
                      <span className="bi bi-person icon-tujuan"></span>
                      <span className="fw-bold">One.</span>
                      <p className="m-0 mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam.</p>
                  </div>
                  <div className="box-tujuan justify-content-center align-items-center container mx-2 d-flex flex-column ">
                      <span className="bi bi-person icon-tujuan"></span>
                      <span className="fw-bold">Two.</span>
                      <p className="m-0 mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam.</p>
                  </div>
                  <div className="box-tujuan justify-content-center align-items-center container mx-2 d-flex flex-column ">
                      <span className="bi bi-person icon-tujuan"></span>
                      <span className="fw-bold">Three.</span>
                      <p className="m-0 mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam.</p>
                  </div>
                  <div className="box-tujuan justify-content-center align-items-center container mx-2 d-flex flex-column ">
                      <span className="bi bi-person icon-tujuan"></span>
                      <span className="fw-bold">Four.</span>
                      <p className="m-0 mx-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nam.</p>
                  </div>
              </div>
          </div>
      </section>
  )
}

const Target = () => {
  return (
      <section className="d-flex flex-column target-section mb-4 py-5 bg-scm2">
          <div className="d-flex flex-column">
              <h1 className="fw-bold container text-pm2">Sasaran PSTI</h1>
              <ul className="ul-sasaran">
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tenetur fugit eos.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tenetur fugit eos.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tenetur fugit eos.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tenetur fugit eos.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tenetur fugit eos.</li>
              </ul>
              <img className="w-100 mt-5 mb-3" src="struktur.jpeg" alt="" />
          </div>
      </section>
  )
}

const Prestasi = () => {
  return (
      <section className="d-flex flex-column prestasi-section mb-4 py-5 ">
          <div className="d-flex text-pm flex-column">
              <h1 className="m-0 container fw-bold">Prestasi Kami</h1>
              <p className="m-0 container">Prestasi dari mahasiswa program studi teknik informatika fakultas teknik dan sains UIKA Bogor.</p>
              <Swiper
               spaceBetween={50}
               slidesPerView={1}
               module={[Navigation]}
               onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="w-100 container"
                    >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
     </section>
  )
}

const Home = () => {
  return (
    <>
    <Navbar />
    <HeroBanner/>
    <About />
    <VisiMisi />
    <Target />
    <Prestasi />
    </>
  )
}

export default Home