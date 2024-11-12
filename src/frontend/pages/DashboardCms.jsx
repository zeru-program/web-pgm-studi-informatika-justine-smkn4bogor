import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"; 
import CountUp from 'react-countup';
import Nav from "../components/SidebarDashboard"
import Swal from 'sweetalert2'
const db = "https://gebyar-it-ftsuikabogor-justine-default-rtdb.firebaseio.com/";

const ContentImg = () => {
    const handleChangedimage = () => {
        fetch(db, "", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
        .then(result => {
            if (result.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Sukses mengganti banner image !",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                });
            }
        })
    }
    return(
        <>
            <div className="d-flex w-100 overflow-hidden flex-column">
                <h1>CMS Background</h1>
                <div className="w-100 m-0 p-0" style={{ width: "100%", overflowX: "scroll" }}>
                    <table className="product-all" style={{  }}>
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}>id</th>
                                <th style={{ width: "100px !important" }}>img</th>
                                <th className="overflow-hidden" style={{ width: "100px" }}>url img</th>
                                <th style={{ width: "200px" }}>banner text</th>
                                <th style={{ width: "150px !important" }}>description</th>
                                <th style={{ width: "150px" }}>Option</th>
                            </tr>
                        </thead>
                        <tbody id="product-table-body">
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const ContentText = () => {
    const [cmsText, setCmsText] = useState([]);

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
               [contentId[1].textContent]: contentId[2].textContent
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