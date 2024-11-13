import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FetchBeritaData from "../../backend/FetchBeritaData";
import { useParams } from "react-router-dom";
import AOS from "aos";
import Swal from "sweetalert2";
import "aos/dist/aos.css";

const BeritaDetail = () => {
  let { id } = useParams();
  const { dataBerita } = FetchBeritaData();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Temukan berita berdasarkan id
  const beritaDetail = Array.isArray(dataBerita)
    ? dataBerita.find((ber) => ber.id_berita == id)
    : null;

  const handleShareWa = () => {
    const url = window.location.href;
    const text = encodeURIComponent(`Check out this page: ${url}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}`;
    window.open(whatsappUrl);
  };

  const handleCopy = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    Swal.fire("Success", "Link berhasil di copy!", "success");
  };

  return (
    <>
      <Navbar />
      {beritaDetail ? (
        <div>
          <img
            data-aos="zoom-in"
            src={beritaDetail.img}
            className="img-berita-detail"
            alt={beritaDetail.title}
          />
          <div className="contain-berita-detail">
          <div className="container-fluid py-3 mb-3">
            <h1 className="text-pm fw-bold">{beritaDetail.title}</h1>
            <div className="d-flex text-pm gap-2 mt-3">
              <i className="bi-person"></i>
              <p>{beritaDetail.created_by}</p>
              <i className="bi-calendar"></i>
              <p>{beritaDetail.tanggal}</p>
            </div>
            <hr />
            <p style={{ whiteSpace: "pre-line" }}>{beritaDetail.content}</p>
            <hr />
            <div className="d-flex gap-2 mt-3">
              <h4>Bagikan: </h4>
              <button
                className="btn-share"
                onClick={handleShareWa}
                style={{ background: "green" }}
              >
                <i className="bi-whatsapp text-light"></i>
              </button>
              <button
                className="btn-share"
                onClick={handleCopy}
                style={{ background: "gray" }}
              >
                <i className="bi-copy text-light"></i>
              </button>
            </div>
          </div>
          <section
            className="d-flex flex-column berita-section mb-4 berita-lainnya py-5 text-pm"
            id="berita"
          >
            <div className="d-flex container-fluid flex-column">
              <h1 data-aos="fade-up" className="m-0 container fw-bold">
                Berita Lainnya
              </h1>
              <div
                className="mt-3 gap-3 d-flex contain-berita"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {Array.isArray(dataBerita) && dataBerita.length > 0 ? (
                  dataBerita.map((berita, index) => (
                    <div
                      className="box-berita shadow"
                      onClick={() => handleClickBerita(berita.id_berita)}
                      key={index}
                    >
                      <img src={berita.img} alt={berita.title} />
                      <div className="pb-5">
                        <h1 className="mb-0 sub-contain-berita">
                          {berita.title}
                        </h1>
                        <p className="mb-0 desk-berita">{berita.deskripsi}</p>
                        <p className="tanggal-berita-sm">
                          {berita.lokasi} - {berita.tanggal}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Belum ada berita..</p>
                )}
              </div>
            </div>
          </section>
          </div>
        </div>
      ) : (
        <p>Berita tidak ditemukan</p>
      )}
      <Footer />
    </>
  );
};

export default BeritaDetail;
