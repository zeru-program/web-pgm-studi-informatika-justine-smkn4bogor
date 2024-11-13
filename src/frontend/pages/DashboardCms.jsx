import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"; 
import CountUp from 'react-countup';
import Nav from "../components/SidebarDashboard"
import FetchCmsBackground from "../../backend/FetchCmsBackground";
import PostCmsImg from "../../backend/PostCmsImg";
import EditCmsImg from "../../backend/EditCmsImg";
import DeleteCmsImg from "../../backend/DeleteCmsImg";
import { createClient } from '@supabase/supabase-js';
import Swal from 'sweetalert2'

const db = import.meta.env.VITE_DB;

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const AddCmsImg = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState("");
    const [uploading, setUploading] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!image) return alert("Please select an image to upload");
  
      const fileName = image.name;
      const bucketName = "cms_image"; // Bucket name
  
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
          const success = await PostCmsImg(title, publicUrl, author);
  
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
          Tambah background
        </button>
        {openAdd && (
          <div className="mt-4" style={{ display: openAdd ? "flex" : "none" }}>
            <form className="d-flex flex-column w-75" onSubmit={handleSubmit}>
              <h5>Image cms or banner</h5>
              <input
              accept="image/*"
              onChange={handleImageChange}
              required
              className="form-control mb-2"
              type="file"
               />
              <h5>Title banner</h5>
              <input
                className="form-control mb-2"
                required
                type="text"
                placeholder="ketik disini.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <h5>Pembuat baner</h5>
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

const ContentImg = () => {
    const { dataCmsImg } = FetchCmsBackground()
    const [infoShown, setInfoShown] = useState(false);

   
  const temporaryEditCms = (uniqueId, elem) => {
    if (!infoShown) {
      Swal.fire("Informasi", "Untuk membatalkan pengeditan data silakan reload/refresh halaman.", "info");
      setInfoShown(true); // Set infoShown to true to prevent future alerts
    }
    const siblingTd = elem.closest("tr").getElementsByTagName("td");
    for (let i = 2; i < siblingTd.length - 2; i++) {
      siblingTd[i].contentEditable = true;
      siblingTd[i].classList.add("temp-update-class");
    }
    elem.classList.add("bg-success");
    elem.classList.remove("bg-warning");
    elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";

    elem.onclick = async () => {
      var contentId = document.querySelectorAll(".temp-update-class");
      var success = await EditCmsImg(
        uniqueId,
        contentId[0].textContent,
        contentId[1].textContent,
        contentId[2].textContent
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

  const temporaryDeleteCms = async (id, urlImg) => {
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
          `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/cms_image/`,
          ""
        );
  
        // Hapus file dari storage Supabase
        const { data, error } = await supabase.storage
          .from("cms_image")
          .remove([filePath]); // Perbaikan untuk menerima array
  
        // Hapus berita dari database setelah gambar terhapus
        const res = await DeleteCmsImg(id);
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

    return(
        <>
            <div className="d-flex w-100 overflow-hidden flex-column">
                <h1>CMS Background</h1>
                <AddCmsImg/>
                <div className="w-100 m-0 p-0 mt-3" style={{ width: "100%", overflowX: "scroll" }}>
                    <table className="product-all" style={{  }}>
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}>No</th>
                                <th style={{ width: "100px !important" }}>Image</th>
                                <th style={{ width: "100px !important" }}>Url image</th>
                                <th style={{ width: "200px" }}>Title banner</th>
                                <th style={{ width: "200px" }}>Created_by</th>
                                <th style={{ width: "200px" }}>Created_at</th>
                                <th style={{ width: "150px" }}>Option</th>
                            </tr>
                        </thead>
                        <tbody id="product-table-body">
                            {Array.isArray(dataCmsImg) &&
                             dataCmsImg.map((cms, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={cms.img} style={{width: "100px"}} alt="" /></td>
                                <td>{cms.img}</td>
                                <td>{cms.title}</td>
                                <td>{cms.created_by}</td>
                                <td>{cms.created_at}</td>
                                <td className="gap-2 d-flex">
                                        <button onClick={(e) => temporaryEditCms(cms.key, e.currentTarget)} className="btn btn-warning">
                                            <i className="bi-pencil text-dark" />
                                        </button>
                                        <button onClick={(e) => temporaryDeleteCms(cms.key, cms.img)} className="btn btn-danger">
                                            <i className="bi-trash text-light" />
                                        </button>
                                </td>
                            </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const ContentText = () => {
    const [cmsText, setCmsText] = useState([]);
    const [infoShown, setInfoShown] = useState(false);

    useEffect(() => {
        fetch(db + "cms.json")
            .then(res => res.json())
            .then(data => {
                const cmsArray = Object.entries(data).map(([key, value]) => ({ key, value }));
                cmsArray.sort((a, b) => {
                    const prefixA = a.key.match(/^[a-zA-Z]+/)[0];
                    const prefixB = b.key.match(/^[a-zA-Z]+/)[0];
                    const numA = parseInt(a.key.match(/\d+/), 10) || 0;
                    const numB = parseInt(b.key.match(/\d+/), 10) || 0;

                    if (prefixA < prefixB) return -1;
                    if (prefixA > prefixB) return 1;

                    return numA - numB;
                });
                setCmsText(cmsArray);
            });
    }, []);

    const handleChangedText = (uniqueId, elem) => {
    if (!infoShown) {
      Swal.fire("Informasi", "Untuk membatalkan pengeditan data silakan reload/refresh halaman.", "info");
      setInfoShown(true); // Set infoShown to true to prevent future alerts
    }
        const siblingTd = elem.closest("tr").getElementsByTagName("td");
        for (let i = 1; i < siblingTd.length - 1; i++) {
            siblingTd[i].contentEditable = true;
            siblingTd[i].classList.add("temp-update-class");
        }
        elem.classList.add("bg-success")
        elem.classList.remove("bg-warning")
        elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";
        
        elem.onclick = () => {
           var contentId = document.querySelectorAll(".temp-update-class");
           var obj = {
               [contentId[0].textContent]: contentId[1].textContent
           }
           fetch(db + "cms.json", {
               method: "PATCH",
               headers: {
                   "Content-Type": "application/json"
               },
               body: JSON.stringify(obj)
           })
           .then(res => {
               if (res.ok) {
                    Swal.fire({
                        title: "Success!",
                        text: "Sukses mengupdate cms text !",
                        icon: "success"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    });
               } else {
                   alert("jaringan anda error")
               }
           })
           .catch(e => alert(e))
        }
    };
    const handleRemoveCms = (id, elem) => {
        Swal.fire({
          title: "Anda yakin?",
          text: "Kamu akan menghapus cms text " + id + " !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
         fetch(db + "cms/" + id + ".json", {
               method: "delete",
               headers: {
                   "Content-Type": "application/json"
               }
           })
           .then(res => {
               if (res.ok) {
                    Swal.fire({
                        title: "Success!",
                        text: "Sukses menghapus cms text " + id,
                        icon: "success"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    });
               } else {
                   alert("jaringan anda error")
               }
           })
           .catch(e => alert(e))
          }
        })
    }

    return (
        <>
            <div className="d-flex mt-3 flex-column">
                <h1>CMS Text</h1>
                <p className="">Custumize cms text in landing page</p>
                <div className="w-100 m-0 p-0" style={{ width: "100%", overflowX: "scroll" }}>
                    <table className="product-all" style={{ width: "100%" }} id="product-table">
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}>ID</th>
                                <th style={{ width: "150px" }}>Section</th>
                                <th style={{ width: "500px" }}>Content</th>
                               <th>Option</th>
                            </tr>
                        </thead>
                        <tbody id="product-table-body">
                            {Array.isArray(cmsText) && cmsText.map((cms, index) => (
                                <tr key={cms.key}>
                                    <td>{index + 1}</td>
                                    <td>{cms.key}</td>
                                    <td>{cms.value}</td>
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
            </div>
        </>
    );
};


const DashboardCms = () => {
    if (!localStorage.getItem("hasLogin") && localStorage.getItem("role") !== "admin") {
        window.location.href = "/"
    }
    return(
        <>
        <Nav content={<>
            <ContentImg />
            <ContentText/>
            </>}/>
        </>
    )
}

export default DashboardCms