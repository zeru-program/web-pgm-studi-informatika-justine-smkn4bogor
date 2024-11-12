import React, { useState, useEffect } from "react"
import Nav from "../components/SidebarDashboard"
import FethBeritaData from '../../backend/FetchBeritaData'
import PostBerita from '../../backend/PostBerita'
import EditBerita from '../../backend/EditBerita'
import DeleteBerita from '../../backend/DeleteBerita'
import Swal from 'sweetalert2'
const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";

const DisplayBerita = () => {
    const { dataBerita } = FethBeritaData();
    
    const temporaryEditBerita = (uniqueId, elem) => {
         const siblingTd = elem.closest("tr").getElementsByTagName("td");
        for (let i = 1; i < siblingTd.length - 2; i++) {
            siblingTd[i].contentEditable = true;
            siblingTd[i].classList.add("temp-update-class");
        }
        elem.classList.add("bg-success")
        elem.classList.remove("bg-warning")
        elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";
        
       elem.onclick = async () => {
           var contentId = document.querySelectorAll(".temp-update-class");
           var success = await EditBerita(uniqueId, contentId[0].textContent, contentId[1].textContent, contentId[2].textContent, contentId[3].textContent, contentId[4].textContent, contentId[5].textContent, contentId[6].textContent, contentId[7].textContent, );
        if (success) {
            Swal.fire("Success", "Data berhasil di ubah", "success").then((result) => {
                if (result.isConfirmed) {
                    location.reload()
                }
            })
        } else {
            Swal.fire("Error", "Gagal menambahkan data", "error");
        }
       }
    }
    
    
    const temporaryDeleteBerita = async (id) => {
        // Show confirmation dialog
        const result = await Swal.fire({
            title: "Anda yakin?",
            text: "Anda akan menghapus berita yang anda pilih",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });
    
        // Check if the action was canceled
        if (result.isDismissed) {
            return false;
        } else {
            try {
                const res = await DeleteBerita(id);
                if (res) {
                    Swal.fire("Success", "Data berhasil dihapus", "success").then((result) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    });
                } else {
                    alert("Gagal menghapus");
                }
            } catch (error) {
                console.error("Error deleting:", error);
                alert("Gagal menghapus : " + error);
            }
        }
    };
    
    return (
        <section className="mt-3">
        <div className="w-100 m-0 p-0" style={{ width: "100%", overflowX: "scroll" }}>
            <table className="prestasi" style={{ paddingRight: "50px", tableLayout: "fixed", width: "100%" }} id="prestasi-table">
                <thead>
                    <tr>
                        <th style={{ width: "50px" }}>No</th>
                        <th style={{ width: "80px" }}>ID</th>
                        <th style={{ width: "200px" }}>Image</th>
                        <th style={{ width: "200px" }}>Title Berita</th>
                        <th style={{ width: "300px" }}>Deskripsi Berita</th>
                        <th style={{ width: "400px" }}>Isi Berita</th>
                        <th style={{ width: "150px" }}>Lokasi Berita</th>
                        <th style={{ width: "150px" }}>Tanggal Berita</th>
                        <th style={{ width: "130px" }}>created_by</th>
                        <th style={{ width: "100px" }}>created_at</th>
                      <th>Option</th>
                    </tr>
                </thead>
                <tbody id="product-table-body">
                    {Array.isArray(dataBerita) && dataBerita.map((ber, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ber.id_berita}</td>
                            <td>{ber.img}</td>
                            <td>{ber.title}</td>
                            <td>{ber.deskripsi}</td>
                            <td>{ber.content}</td>
                            <td>{ber.lokasi}</td>
                            <td>{ber.tanggal}</td>
                            <td>{ber.created_by}</td>
                            <td>{ber.created_at}</td>
                            <td className="gap-2 d-flex">
                                <button onClick={(e) => temporaryEditBerita(ber.key, e.currentTarget)} className="btn btn-warning">
                                    <i className="bi-pencil text-dark" />
                                </button>
                                <button onClick={(e) => temporaryDeleteBerita(ber.key)} className="btn btn-danger">
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
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [content, setContent] = useState("");
    const [location, setLocation] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [openAdd, setOpenAdd] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
       const success = await PostBerita(title, description, img, content, author, location, date);

        if (success) {
            Swal.fire("Success", "Data berhasil ditambahkan, silakan reload halaman", "success").then((result) => {
                if (result.isConfirmed) {
                     location.reload();
                  }
            })
        } else {
            Swal.fire("Error", "Gagal menambahkan data", "error");
        }
    };

    return (
        <section>
            <button className="py-2 px-4 btn-sec-dash" onClick={() => setOpenAdd(!openAdd)}>
                Tambah berita
            </button>
            {openAdd && (
                <div className="mt-4" style={{ display: openAdd ? "flex" : "none" }}>
                    <form className="d-flex flex-column w-75" onSubmit={handleSubmit}>
                        <h5>Image berita (url)</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                        />
                        <h5>Title berita</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <h5>Deskripsi singkat berita</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <h5>Isi berita</h5>
                        <textarea
                            className="form-control"
                            placeholder="ketik disini.."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <h5>Lokasi berita</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <h5>Tanggal berita</h5>
                        <input
                            className="form-control"
                            type="date"
                            placeholder="ketik disini.."
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <h5>Pembuat berita</h5>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="ketik disini.."
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <button type="submit" className="btn-sec-dash mt-3">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
};

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