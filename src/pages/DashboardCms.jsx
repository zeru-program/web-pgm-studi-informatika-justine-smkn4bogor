import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"; 
import CountUp from 'react-countup';
import Nav from "../components/SidebarDashboard"
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
            <div className="d-flex flex-column">
                <h1>CMS Background</h1>
                <div className="w-100 m-0 p-0" style={{ width: "100%", overflowX: "scroll" }}>
                    <table className="product-all" style={{ paddingRight: "50px", tableLayout: "fixed", width: "100%" }} id="product-table">
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}>id</th>
                                <th style={{ width: "100px !important" }}>img</th>
                                <th className="overflow-hidden" style={{ width: "100px" }}>url img</th>
                                <th style={{ width: "200px" }}>banner text</th>
                                <th style={{ width: "200px !important" }}>description</th>
                                <th style={{ width: "200px !important" }}>Option</th>
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
    useEffect(() => {
        fetch(db + "")
    }, [])
    const handleChangedText = () => {
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
            <div className="d-flex flex-column">
                <h1>CMS Text</h1>
                <div className="w-100 m-0 p-0" style={{ width: "100%", overflowX: "scroll" }}>
                    <table className="product-all" style={{ paddingRight: "50px", tableLayout: "fixed", width: "100%" }} id="product-table">
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}>id</th>
                                <th style={{ width: "100px !important" }}>section</th>
                                <th style={{ width: "100px !important" }}>type</th>
                                <th style={{ width: "250px" }}>content</th>
                                <th style={{ width: "200px !important" }}>Option</th>
                            </tr>
                        </thead>
                        <tbody id="product-table-body">
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

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