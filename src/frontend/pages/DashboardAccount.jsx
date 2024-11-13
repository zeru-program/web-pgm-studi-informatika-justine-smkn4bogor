import React, { useState, useEffect } from "react";
import Nav from "../components/SidebarDashboard";
import FetchAccountData from "../../backend/FetchAccountData";
import EditAccount from "../../backend/EditAccount";
import DeleteAccount from "../../backend/DeleteAccount";
import Swal from "sweetalert2";
import { createClient } from "@supabase/supabase-js";

const db = import.meta.env.VITE_DB;


const DisplayAccount = () => {
  const { dataAccount } = FetchAccountData();
  const [infoShown, setInfoShown] = useState(false);
  const handleTemporaryEdit = (uniqueId, elem) => {
      var info = false;
      if (!infoShown) {
          Swal.fire("Informasi", "Untuk membatalkan pengeditan data silakan reload/refresh halaman.", "info");
          setInfoShown(true);
        }
    const siblingTd = elem.closest("tr").getElementsByTagName("td");
    for (let i = 1; i < siblingTd.length - 1; i++) {
      siblingTd[i].contentEditable = true;
      siblingTd[i].classList.add("temp-update-class");
    }
    elem.classList.add("bg-success");
    elem.classList.remove("bg-warning");
    elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";

    elem.onclick = async () => {
      var contentId = document.querySelectorAll(".temp-update-class");
      var success = await EditAccount(
        uniqueId,
        contentId[0].textContent,
        contentId[1].textContent,
        contentId[2].textContent,
        contentId[3].textContent,
        contentId[4].textContent
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
  const temporaryDelAccount = async (id, urlImg) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Anda yakin?",
      text: "Anda akan menghapus Account yang anda pilih",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // Check if the action was canceled
    if (result.isDismissed) {
      return false;
    } else {
      try {
        const res = await DeleteAccount(id);
        if (res) {
          Swal.fire("Success", "Data berhasil dihapus", "success").then(
            (result) => {
              if (result.isConfirmed) {
                location.reload();
              }
            }
          );
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
              <th style={{ width: "50px" }}>NO</th>
              <th style={{ width: "200px" }}>Username</th>
              <th style={{ width: "200px" }}>Email</th>
              <th style={{ width: "200px" }}>Role</th>
              <th style={{ width: "300px" }}>Password</th>
              <th style={{ width: "300px" }}>Created_at</th>
              <th style={{ width: "110px" }}>Option</th>
            </tr>
          </thead>
          <tbody id="product-table-body">
            {Array.isArray(dataAccount) &&
              dataAccount.map((acc, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{acc.username}</td>
                  <td>{acc.email}</td>
                  <td>{acc.role}</td>
                  <td>{acc.password}</td>
                  <td>{acc.created_at}</td>
                  <td className="gap-2 d-flex">
                    <button
                      onClick={(e) =>
                        handleTemporaryEdit(acc.key, e.currentTarget)
                      }
                      className="btn btn-warning"
                    >
                      <i className="bi-pencil text-dark" />
                    </button>
                    <button
                      onClick={() => temporaryDelAccount(acc.key, acc.img)}
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

const MainContent = () => {
    if (!localStorage.getItem("hasLogin") && localStorage.getItem("role") !== "admin") {
        window.location.href = "/"
    }
  return (
    <>
      <h1>Account management</h1>
      <DisplayAccount />
    </>
  );
};

const DashboardAccount = () => {
  return (
    <>
      <Nav content={<MainContent />} />
    </>
  );
};

export default DashboardAccount;
