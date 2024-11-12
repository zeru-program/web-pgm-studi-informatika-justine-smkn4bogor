import React, { useState, useEffect } from "react"
import Nav from "../components/SidebarDashboard"
import FetchPrestasiData from '../../backend/FetchPrestasiData'
import PostPrestasi from '../../backend/PostPrestasi'
import EditPrestasi from '../../backend/EditPrestasi'
import DeletePrestasi from '../../backend/DeletePrestasi'
import Swal from 'sweetalert2'
import { createClient } from '@supabase/supabase-js';

const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";

const DisplayPrestasi = () => {
    const { dataPrestasi } = FetchPrestasiData();
    const handleTemporaryEdit = (uniqueId, elem) => {
         const siblingTd = elem.closest("tr").getElementsByTagName("td");
        for (let i = 1; i < siblingTd.length - 1; i++) {
            siblingTd[i].contentEditable = true;
            siblingTd[i].classList.add("temp-update-class");
        }
        elem.classList.add("bg-success")
        elem.classList.remove("bg-warning")
        elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";
        
       elem.onclick = async () => {
           var contentId = document.querySelectorAll(".temp-update-class");
           var success = await EditPrestasi(uniqueId, contentId[0].textContent, contentId[1].textContent, contentId[2].textContent, contentId[3].textContent, contentId[4].textContent, contentId[5].textContent, );
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
    const temporaryDelPrestasi = async (id) => {
        // Show confirmation dialog
        const result = await Swal.fire({
            title: "Anda yakin?",
            text: "Anda akan menghapus prestasi yang anda pilih",
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
                const res = await DeletePrestasi(id);
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
                alert("Gagal menghapus");
            }
        }
    };

    return (
        <section className="mt-3">
        <div className="w-100 m-0 p-0" style={{ width: "100%", overflowX: "scroll" }}>
            <table className="prestasi" style={{ paddingRight: "50px", tableLayout: "fixed", width: "100%" }} id="prestasi-table">
                <thead>
                    <tr>
                        <th style={{ width: "50px" }}>NO</th>
                        <th style={{ width: "80px" }}>ID</th>
                        <th style={{ width: "200px" }}>Image</th>
                        <th style={{ width: "200px" }}>Title Prestasi</th>
                        <th style={{ width: "300px" }}>Lomba</th>
                        <th style={{ width: "200px" }}>Lokasi Prestasi</th>
                        <th style={{ width: "150px" }}>Tanggal Prestasi</th>
                        <th style={{ width: "110px" }}>Option</th>
                    </tr>
                </thead>
                <tbody id="product-table-body">
                    {Array.isArray(dataPrestasi) && dataPrestasi.map((pres, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{pres.id_pres}</td>
                            <td>{pres.img}</td>
                            <td>{pres.title}</td>
                            <td>{pres.lomba}</td>
                            <td>{pres.lokasi}</td>
                            <td>{pres.tanggal}</td>
                            <td className="gap-2 d-flex">
                                <button onClick={(e) =>  handleTemporaryEdit(pres.key, e.currentTarget)} className="btn btn-warning">
                                    <i className="bi-pencil text-dark" />
                                </button>
                                <button onClick={() => temporaryDelPrestasi(pres.key) } className="btn btn-danger">
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
  const [img, setImg] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [openAdd, setOpenAdd] = useState(false);

  const SUPABASE_URL = "https://pnufdsiocmqhdmnhhcwq.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBudWZkc2lvY21xaGRtbmhoY3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MTQ5NzYsImV4cCI6MjA0Njk5MDk3Nn0.PayxFRDHn11DMrDNb8R-lDXWojO-_7Vj2swFaPqMY0A";

  const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (!image) return alert("Please select an image to upload");
    
      const fileName = `pres-${Date.now()}`; // Unique file name
      const bucketName = "prestasi"; // Bucket name
    
      try {
        setUploading(true);
    
        // Initialize Supabase client
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    
        // Upload image to Supabase storage
        const { data, error } = await supabase.storage
          .from(bucketName)
          .upload(fileName, image, {
            cacheControl: "3600",
            upsert: false,
          });
    
        if (error) {
          console.error("Error uploading image:", error.message);
          alert("Error uploading image: " + error.message);
        } else {
          alert("Image uploaded successfully!");
    
          // Construct the public URL
          const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucketName}/${data.path}`;
          setImg(publicUrl); // Save the image URL for future use
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image : " + error);
      } finally {
        setUploading(false);
      }
    
      // Send data to your server or database
      const success = await PostPrestasi(title, competition, img, location, date);
    
      if (success) {
        Swal.fire("Success", "Data berhasil ditambahkan, silakan reload halaman", "success").then(
          (result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          }
        );
      } else {
        Swal.fire("Error", "Gagal menambahkan data", "error");
      }
    };


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <section>
      <button
        className="py-2 px-4 btn-sec-dash"
        onClick={() => setOpenAdd(!openAdd)}
      >
        Tambah prestasi
      </button>
      <div className="mt-4" style={{ display: openAdd ? "flex" : "none" }}>
        <form className="d-flex w-75 flex-column" onSubmit={handleSubmit}>
          <h5>Title prestasi</h5>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="ketik disini.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h5>Lomba</h5>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="ketik disini.."
            value={competition}
            onChange={(e) => setCompetition(e.target.value)}
          />
          <h5>Image prestasi (url)</h5>
          <input
            accept="image/*"
            onChange={handleImageChange}
            className="form-control mb-2"
            type="file"
          />
          <h5>Lokasi prestasi</h5>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="ketik disini.."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <h5>Tanggal prestasi</h5>
          <input
            className="form-control mb-2"
            type="date"
            placeholder="ketik disini.."
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit" className="mt-3 btn-sec-dash" disabled={uploading}>
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

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