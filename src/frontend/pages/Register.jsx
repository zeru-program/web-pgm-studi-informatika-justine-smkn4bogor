import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

const Register = () => {
    if (localStorage.getItem("hasRegister")) {
        window.location.href = "/login"
    }
    if (localStorage.getItem("hasLogin")) {
        window.location.href = "/"
    }
    const [iptUser, setIptUser] = useState("");
    const [iptEmail, setIptEmail] = useState("");
    const [iptPass, setIptPass] = useState("");
    
    const handleform = (e) => {
      e.preventDefault()
        
        var result = {
            username: iptUser,
            email: iptEmail,
            role: "user",
            password: iptPass,
            created_at: new Date()
        };
        fetch(import.meta.env.VITE_DB + "account.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
            .then(res => {
                if (res.ok) {
                    Swal.fire({
                        title: "Success!",
                        text: "Berhasil register, silakan login!",
                        icon: "success"
                    }).then((result) => {
                        if (result.isConfirmed) {
                        localStorage.setItem("hasRegister", true)
                           window.location.href = "/login";
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Ups.. something wrong",
                        text: "Error 505 server error",
                        icon: "error"
                    });
                }
            })
            .catch(e => alert(e));
    };

    const handleIptUsername = (e) => {
        if (e.target.value === "admin") {
              Swal.fire({
                 title: "Failed",
                 text: "Gunakan username lain selain admin.",
                 icon: "error"
             });
             setIptUser("")
             return
        }
        setIptUser(e.target.value);
      };
      const handleIptPass = (e) => {
        setIptPass(e.target.value);
      };
  return (
    <div className="w-100 vh-100 text-light d-flex justify-content-center align-items-center ">
       <form className="d-flex shadow align-items-center container flex-column bg-scm-d py-5 rounded-3" style={{width:"300px", height:"auto"}} onSubmit={handleform}>
         <h1 className="text-center fw-bold">Register</h1>
         <input className="form-control mt-3" placeholder="username" required type="text" value={iptUser} onInput={handleIptUsername} />
         <input className="form-control mt-3" placeholder="email" required type="text" value={iptEmail} onInput={(e) => setIptEmail(e.target.value)} />
         <input className="form-control mt-3" placeholder="password" type="password" onInput={handleIptPass} required/>
         <button className="mt-3 col-4 btn-login-register">Submit</button>
         <a className='mt-3 text-light' href="/login">Already a account? Login here</a>
       </form>
    </div>
  );
};
export default Register;
