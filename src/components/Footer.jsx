import React, { useState } from "react";
import "../Navbar.css";

const Footer = () => {
    return (
        <footer className="py-3 pt-4 container-fluid">
         <div class="d-flex flex-wrap contain-fo">
         <div class="d-flex flex-column fo-1">
         <h1 className="m-0 fw-bold">TI UIKA Bogor.</h1>
         <p className="m-0">Universitas Ibn Khaldun Bogor atau disingkat UIKA adalah sebuah perguruan tinggi Islam swasta di Kota Bogor, Jawa Barat, yang didirikan oleh para tokoh ulama di Bogor dan merupakan kampus Islam tertua di kota tersebut.</p>
         </div>
         <div class="d-flex flex-column fo-2">
         <form>      
          <input name="name" type="text" class="feedback-input" placeholder="Name" />   
          <input name="email" type="text" class="feedback-input" placeholder="Email" />
          <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
          <input type="submit" value="SUBMIT"/>
        </form>
         </div>
         <div class="mb-3 d-flex flex-column fo-3">
             <h2 class="m-0">Alamat</h2>
             <span className="mt-3">📍 Jl. Sholeh Iskandar, RT.01/RW.10, Kedungbadak, Kec. Tanah Sereal, Kota Bogor, Jawa Barat 16162</span>
         </div>
         </div>
         <hr className="" />
         <p className="text-center mb-0 mt-4">
             COPYRIGHT © 2024 PSTI UIKA BOGOR BY JUSTINE.
         </p>
        </footer>
    )
}


export default Footer;
