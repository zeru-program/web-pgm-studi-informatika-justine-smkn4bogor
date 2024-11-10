import React, { useState, useEffect } from "react"
import Nav from "../components/SidebarDashboard"
import FethBeritaData from '../../backend/FetchBeritaData'
import Swal from 'sweetalert2'
const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";

const DisplayBerita = () => {
    const { dataBerita } = FethBeritaData();
    return (
        <section className="mt-3">
        <div className="w-100 m-0 p-0" style={{ width: "100%", overflowX: "scroll" }}>
            <table className="prestasi" style={{ paddingRight: "50px", tableLayout: "fixed", width: "100%" }} id="prestasi-table">
                <thead>
                    <tr>
                        <th style={{ width: "50px" }}>NO</th>
                        <th style={{ width: "80px" }}>ID Berita</th>
                        <th style={{ width: "200px" }}>Title Berita</th>
                        <th style={{ width: "300px" }}>Deskripsi Berita</th>
                        <th style={{ width: "400px" }}>Isi Berita</th>
                        <th style={{ width: "150px" }}>Lokasi Berita</th>
                        <th style={{ width: "100px" }}>Tanggal Berita</th>
                        <th style={{ width: "100px" }}>created_by</th>
                        <th style={{ width: "100px" }}>created_at</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody id="product-table-body">
                    {Array.isArray(dataBerita) && dataBerita.map((pres, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{pres.id_berita}</td>
                            <td>{pres.title}</td>
                            <td>{pres.deskripsi}</td>
                            <td>{pres.content}</td>
                            <td>{pres.lokasi}</td>
                            <td>{pres.tanggal}</td>
                            <td>{pres.created_by}</td>
                            <td>{pres.created_at}</td>
                            <td className="gap-2 d-flex">
                                <button onClick={(e) => handleChangedText(cms.key, e.currentTarget)} className="btn btn-warning">
                                    <i className="bi-pencil text-dark" />
                                </button>
                                <button onClick={(e) => handleRemoveCms(cms.key, e.currentTarget)} className="btn btn-danger">
                                    <i className="bi-trash text-light" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </section>
    )
}

const AddBerita = () => {
    const [title, setTitle] = useState("")
    return (
        <section>
            <button className="btn btn-primary">Tambah berita</button>
            <div className="mt-4">
                <form className="d-flex flex-column">
                    <h5>Title berita</h5>
                    <input className="form-control" type="text" placeholder="ketik disini.." onChange={(e) => setTitle(e.currentTarget)} />
                    <h5>Deskripsi singkat berita</h5>
                    <input className="form-control" type="text" placeholder="ketik disini.." onChange={(e) => setTitle(e.currentTarget)} />
                    <h5>Isi berita</h5>
                    <input className="form-control" type="text" placeholder="ketik disini.." onChange={(e) => setTitle(e.currentTarget)} />
                    <h5>Lokasi berita</h5>
                    <input className="form-control" type="text" placeholder="ketik disini.." onChange={(e) => setTitle(e.currentTarget)} />
                    <h5>Pembuat berita</h5>
                    <input className="form-control" type="text" placeholder="ketik disini.." onChange={(e) => setTitle(e.currentTarget)} />
                    <h5>Tanggal berita</h5>
                    <input className="form-control" type="text" placeholder="ketik disini.." onChange={(e) => setTitle(e.currentTarget)} />
                    <button type="submit" className="btn mt-3 btn-outline-primary">Submit</button>
                </form>
            </div>
        </section>
    )
}

const MainContent = () => {
    return(
        <>
        <h1>Berita management</h1>
        <AddBerita />
        <DisplayBerita />
        </>
     )
}

const DashboardBerita = () => {
    return(
      <>
      <Nav content={<MainContent />} />
      </>
    )
}

export default DashboardBerita