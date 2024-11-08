import React, { useState } from "react";
import "../Navbar.css";
import useCmsData from '../components/UseCmsData';
import Swal from 'sweetalert2'

const Footer = () => {
    const { dataCms } = useCmsData(); 
    const [validasiErr, setValidasiErr] = useState(false);
    const [iptNama, setIptNama] = useState("");
    const [iptEmail, setIptEmail] = useState("");
    const [iptSubjek, setIptSubjek] = useState("");
    const handleform = (e) => {
      e.preventDefault()
        if (!iptNama && !iptEmail && !iptSubjek) {
            setValidasiErr(true)
            return
        } else {
            setValidasiErr(false)
        }
        var result = {
            userName: iptNama,
            userEmail: iptEmail,
            message: iptSubjek,
            created_at: new Date()
        };
        fetch("https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/" + "contact.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
            .then(res => {
                if (res.ok) {
                    Swal.fire({
                        title: "Success!",
                        text: "Sukses mengirim pesan, terima kasih !",
                        icon: "success"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Ups.. something wrong",
                        text: "Error 505 server error",
                        icon: "error"
                    });
                }
            })
            .catch(e => alert(e));
    };

    const handleIptNama = (e) => {
        setIptNama(e.target.value);
        setValidasiErr(false)
      };
      const handleIptEmail = (e) => {
        setIptEmail(e.target.value);
        setValidasiErr(false)
      };
      const handleIptSubjek = (e) => {
        setIptSubjek(e.target.value);
        setValidasiErr(false)
    };
    return (
      <footer className="py-3 pt-4 container-fluid">
        <div className="d-flex flex-wrap contain-fo">
          <div className="d-flex flex-column fo-1">
            <h1 className="m-0 fw-bold">
           {dataCms["footer1_title"] || "TI FTS UIKA Bogor."}
            </h1>
            <p className="m-0 desk-footer">
           {dataCms["footer2_desk"] || "Fakultas Teknik dan Sains Universitas Ibn Khaldun Bogor (FTS-UIKA) Bogor berdiri sejak tahun 1974 dengan nama Fakultas Teknik (FT-UIKA). Seiring dengan perkembangan regulasi dan pengembangan institusi maka sejak tahun 2018 Fakultas Teknik berganti nama menjadi Fakultas Teknik dan Sains melalui Keputusan Rektor Nomor: 010/K.13/IIIa/KR-PNFT/UIKA/2018."}
            </p>
          </div>
          <div className="d-flex flex-column fo-2" style={{marginRight: "50px"}}>
            <h2 className="m-0">Hubungi Kami</h2>
            <form className="form-contact" onSubmit={handleform}>
              <input
                type="text"
                onInput={handleIptNama}
                className="feedback-input"
                style={{border: validasiErr ? "2px solid red !important" : ""}}
                placeholder="Nama"
                required
                />
              <span className='text-danger' style={{display: validasiErr ? "flex" : "none"}}>Username harus di isi.</span>
              <input
                type="email"
                style={{border: validasiErr ? "2px solid red !important" : ""}}
                onInput={handleIptEmail}
                className="feedback-input"
                placeholder="Email"
                required
                />
              <span className='text-danger' style={{display: validasiErr ? "flex" : "none"}}>Email harus di isi.</span>
              <textarea
                onInput={handleIptSubjek}
                style={{border: validasiErr ? "2px solid red !important" : ""}}
                className="feedback-input"
                placeholder="Pesan"
                required
              ></textarea>
              <span className='text-danger' style={{display: validasiErr ? "flex" : "none"}}>Pesan harus di isi.</span>
              <input type="submit" className="mt-3" value="SUBMIT" />
            </form>
          </div>
          <div className="mb-3 d-flex flex-column fo-3">
            <h2 className="m-0">Alamat</h2>
            <span className="mt-3 desk-footer">
           {dataCms["footer3_alamat"] || "📍 Jl. Sholeh Iskandar, RT.01/RW.10, Kedungbadak, Kec. Tanah Sereal, Kota Bogor, Jawa Barat 16162"}
            </span>
          </div>
        </div>
        <hr className="" />
        <p className="text-center mb-0 mt-4">
        
           {dataCms["footer4_cp"] || "COPYRIGHT © 2024 PSTI UIKA BOGOR BY JUSTINE."}
          
        </p>
      </footer>
    );
}


export default Footer;
