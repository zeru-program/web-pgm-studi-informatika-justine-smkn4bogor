import React, { useState, useEffect } from "react"
import Nav from "../components/SidebarDashboard"
import Swal from 'sweetalert2'
const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";

const DisplayPrestasi = () => {
    return (
        <section>
        </section>
    )
}

const AddPrestasi = () => {
    const [title, setTitle] = useState("")
    return (
        <section>
            <button className="btn btn-primary">Tambah berita</button>
            <div className="mt-4">
                <form className="d-flex flex-column">
                    <h5>Input label</h5>
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