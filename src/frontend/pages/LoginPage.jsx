import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

const LoginPage = () => {
    if (localStorage.getItem("hasLogin")) {
        window.location.href = "/"
    }
    const [iptUser, setIptUser] = useState("");
    const [iptPass, setIptPass] = useState("");
    
    const handleform = (e) => {
      e.preventDefault()
        
        fetch(import.meta.env.VITE_DB + "account.json")
            .then(res => res.json())
            .then(data => {
                var find = false 
                for (let key in data) {
                    var val = data[key]
                    
                    if (iptUser === val.username && iptPass === val.password) {
                        find = true 
                    Swal.fire({
                        title: "Success",
                        text: "Berhasil login",
                        icon: "success"
                    }).then((result) => {
                     if (result.isConfirmed) {
                       localStorage.setItem("hasLogin", true)
                       localStorage.removeItem("hasRegister")
                        localStorage.setItem("username", val.username)
                        localStorage.setItem("password", val.password)
                        window.location.href = "/?auth=succes"  
                     }
                      })
                    }
                }
                if (!find) {
                    Swal.fire({
                        title: "Failed",
                        text: "Username atau password tidak cocok.",
                        icon: "error"
                    });
                }
            })
            .catch(e => alert(e));
    };

    const handleIptUsername = (e) => {
        setIptUser(e.target.value);
      };
      const handleIptPass = (e) => {
        setIptPass(e.target.value);
      };
  return (
    <div className="w-100 vh-100 text-light d-flex justify-content-center align-items-center ">
       <form className="d-flex shadow align-items-center container flex-column bg-scm-d py-5 rounded-3" style={{width:"300px", height:"auto"}} onSubmit={handleform}>
         <h1 className="text-center fw-bold">Login</h1>
         <input className="form-control mt-3" placeholder="username" required type="text" onInput={handleIptUsername} />
         <input className="form-control mt-3" placeholder="password" type="password" onInput={handleIptPass} required/>
         <button className="mt-3 col-4 btn-login-register">Submit</button>
         <a className='mt-3 text-light' href="register">Dont have a account? Register here</a>
       </form>
    </div>
  );
};
export default LoginPage;
