import React, { useState, useEffect } from "react"
import Nav from "../components/SidebarDashboard"
import FetchPrestasiData from '../../backend/FetchPrestasiData'
import PostPrestasi from '../../backend/PostPrestasi'
import Swal from 'sweetalert2'
const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";

const DisplayPrestasi = () => {
    const { dataPrestasi } = FetchPrestasiData();
    return (
        <section className="mt-3">
        <div className="w-100 m-0 p-0" style={{ width: "100%", overflowX: "scroll" }}>
            <table className="prestasi" style={{ paddingRight: "50px", tableLayout: "fixed", width: "100%" }} id="prestasi-table">
                <thead>
                    <tr>
                        <th style={{ width: "50px" }}>NO</th>
                        <th style={{ width: "80px" }}>ID prestasi</th>
                        <th style={{ width: "200px" }}>Image</th>
                        <th style={{ width: "200px" }}>Title Prestasi</th>
                        <th style={{ width: "300px" }}>Lomba</th>
                        <th style={{ width: "200px" }}>Lokasi Prestasi</th>
                        <th style={{ width: "100px" }}>Tanggal Prestasi</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody id="product-table-body">
                    {Array.isArray(dataPrestasi) && dataPrestasi.map((pres, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{pres.id_pres}</td>
                            <td><img src={pres.img} style={{width: "50px"}} /> {pres.img}</td>
                            <td>{pres.title}</td>
                            <td>{pres.lomba}</td>
                            <td>{pres.lokasi}</td>
                            <td>{pres.tanggal}</td>
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

const AddPrestasi = () => {
        const [title, setTitle] = useState("");
        const [competition, setCompetition] = useState("");
        const [image, setImage] = useState("");
        const [location, setLocation] = useState("");
        const [date, setDate] = useState("");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const res = PostPrestasi(title, competition, image, location, date)

            if (res == true) {
                alert("berhail")
            } else if (res == false) {
                alert("gagal")
            }
        };
    
        return (
            <section>
                <button className="btn btn-primary">Tambah prestasi</button>
                <div className="mt-4">
                    <form className="d-flex flex-column" onSubmit={handleSubmit}>
                        <h5>Title prestasi</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <h5>Lomba</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={competition}
                            onChange={(e) => setCompetition(e.target.value)}
                        />
                        <h5>Image prestasi</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <h5>Lokasi prestasi</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <h5>Tanggal prestasi</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <button type="submit" className="btn mt-3 btn-outline-primary">Submit</button>
                    </form>
                </div>
            </section>    
    )
}

const MainContent = () => {
    return(
        <>
        <h1>Prestasi management</h1>
        <AddPrestasi />
        <DisplayPrestasi />
        </>
     )
}

const DashboardPrestasi = () => {
    return(
      <>
      <Nav content={<MainContent />} />
      </>
    )
}

export default DashboardPrestasi