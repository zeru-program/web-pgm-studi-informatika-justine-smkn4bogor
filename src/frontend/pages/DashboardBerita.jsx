import React, { useState, useEffect } from "react";
import Nav from "../components/SidebarDashboard";
import FethBeritaData from "../../backend/FetchBeritaData";
import PostBerita from "../../backend/PostBerita";
import EditBerita from "../../backend/EditBerita";
import DeleteBerita from "../../backend/DeleteBerita";
import Swal from "sweetalert2";
import { createClient } from '@supabase/supabase-js';

// supabase configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const DisplayBerita = () => {
  const { dataBerita } = FethBeritaData();

  const temporaryEditBerita = (uniqueId, elem) => {
    const siblingTd = elem.closest("tr").getElementsByTagName("td");
    for (let i = 3; i < siblingTd.length - 2; i++) {
      siblingTd[i].contentEditable = true;
      siblingTd[i].classList.add("temp-update-class");
    }
    elem.classList.add("bg-success");
    elem.classList.remove("bg-warning");
    elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";

    elem.onclick = async () => {
      var contentId = document.querySelectorAll(".temp-update-class");
      var success = await EditBerita(
        uniqueId,
        contentId[0].textContent,
        contentId[1].textContent,
        contentId[2].textContent,
        contentId[3].textContent,
        contentId[4].textContent,
        contentId[5].textContent,
        contentId[6].textContent
      );
      if (success) {
        Swal.fire("Success", "Data berhasil di ubah", "success").then(
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
  };

  const temporaryDeleteBerita = async (id, urlImg) => {
    // Tampilkan dialog konfirmasi
    const result = await Swal.fire({
      title: "Anda yakin?",
      text: "Anda akan menghapus berita yang anda pilih",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    // Jika aksi dibatalkan
    if (result.isDismissed) {
      return false;
    } else {
      try {
        // Inisialisasi path file dari URL
        const filePath = urlImg.replace(
          `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/berita/`,
          ""
        );
  
        // Hapus file dari storage Supabase
        const { data, error } = await supabase.storage
          .from("berita")
          .remove([filePath]); // Perbaikan untuk menerima array
  
        // Hapus berita dari database setelah gambar terhapus
        const res = await DeleteBerita(id);
        if (res) {
          Swal.fire("Success", "Data berhasil dihapus", "success").then(
            (result) => {
              if (result.isConfirmed) {
                location.reload();
              }
            }
          );
        } else {
          Swal.fire("Error", "Gagal menghapus data berita", "error");
        }
      } catch (error) {
        console.error("Error deleting:", error);
        Swal.fire("Error", "Gagal menghapus: " + error.message, "error");
      }
    }
  };
  

  return (
    <section className="mt-3">
      <div
        className="w-100 m-0 p-0"
        style={{ width: "100%", overflowX: "scroll" }}
      >
        <table
          className="prestasi"
          style={{ paddingRight: "50px", tableLayout: "fixed", width: "100%" }}
          id="prestasi-table"
        >
          <thead>
            <tr>
              <th style={{ width: "50px" }}>No</th>
              <th style={{ width: "80px" }}>ID</th>
              <th style={{ width: "200px" }}>Image</th>
              <th style={{ width: "200px" }}>Url</th>
              <th style={{ width: "200px" }}>Title Berita</th>
              <th style={{ width: "300px" }}>Deskripsi Berita</th>
              <th style={{ width: "400px" }}>Isi Berita</th>
              <th style={{ width: "150px" }}>Lokasi Berita</th>
              <th style={{ width: "150px" }}>Tanggal Berita</th>
              <th style={{ width: "130px" }}>created_by</th>
              <th style={{ width: "150px" }}>created_at</th>
              <th style={{ width: "120px" }}>Option</th>
            </tr>
          </thead>
          <tbody id="product-table-body">
            {Array.isArray(dataBerita) &&
              dataBerita.map((ber, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ber.id_berita}</td>
                  <td><img src={ber.img} style={{width: "100px"}} alt="" /></td>
                  <td>{ber.img}</td>
                  <td>{ber.title}</td>
                  <td>{ber.deskripsi}</td>
                  <td>{ber.content}</td>
                  <td>{ber.lokasi}</td>
                  <td>{ber.tanggal}</td>
                  <td>{ber.created_by}</td>
                  <td>{ber.created_at}</td>
                  <td className="gap-2 d-flex">
                    <button
                      onClick={(e) =>
                        temporaryEditBerita(ber.key, e.currentTarget)
                      }
                      className="btn btn-warning"
                    >
                      <i className="bi-pencil text-dark" />
                    </button>
                    <button
                      onClick={(e) => temporaryDeleteBerita(ber.key, ber.img)}
                      className="btn btn-danger"
                    >
                      <i className="bi-trash text-light" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const AddBerita = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return alert("Please select an image to upload");

    const extension = image.name.split('.').pop(); // Extracts extension (e.g., "jpg" or "png")
    const fileName = `berita-${Date.now()}.${extension}`;
    const bucketName = "berita"; // Bucket name

    try {
      setUploading(true);


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
        // Construct the public URL
        const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucketName}/${fileName}`;

        // Lanjutkan dengan menggunakan `publicUrl` langsung
        const success = await PostBerita(title, description, publicUrl, content, author, location, date);

        if (success) {
          Swal.fire(
            "Success",
            "Data berhasil ditambahkan, silakan reload halaman",
            "success"
          ).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
        } else {
          Swal.fire("Error", "Gagal menambahkan data", "error");
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image : " + error);
    } finally {
      setUploading(false);
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
        Tambah berita
      </button>
      {openAdd && (
        <div className="mt-4" style={{ display: openAdd ? "flex" : "none" }}>
          <form className="d-flex flex-column w-75" onSubmit={handleSubmit}>
            <h5>Image berita</h5>
            <input
            accept="image/*"
            onChange={handleImageChange}
            className="form-control mb-2"
            required
            type="file"
             />
            <h5>Title berita</h5>
            <input
              className="form-control mb-2"
              type="text"
              required
              placeholder="ketik disini.."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h5>Deskripsi singkat berita</h5>
            <input
              className="form-control mb-2"
              type="text"
              required
              placeholder="ketik disini.."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h5>Isi berita</h5>
            <textarea
              className="form-control mb-2"
              placeholder="ketik disini.."
              value={content}
              required
              onChange={(e) => setContent(e.target.value)}
            />
            <h5>Lokasi berita</h5>
            <input
              className="form-control mb-2"
              type="text"
              required
              placeholder="ketik disini.."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <h5>Tanggal berita</h5>
            <input
              className="form-control mb-2"
              type="text"
              required
              placeholder="ketik disini.."
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <h5>Pembuat berita</h5>
            <input
              className="form-control"
              type="text"
              required
              placeholder="ketik disini.."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit" className="btn-sec-dash mt-3">
            {uploading ? "Uploading..." : "Submit"}
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

const MainContent = () => {
  return (
    <>
      <h1>Berita management</h1>
      <AddBerita />
      <DisplayBerita />
    </>
  );
};

const DashboardBerita = () => {
  return (
    <>
      <Nav content={<MainContent />} />
    </>
  );
};

export default DashboardBerita;
