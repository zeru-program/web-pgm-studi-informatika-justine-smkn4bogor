const Logout = () => {  
        localStorage.removeItem("hasLogin")
        localStorage.removeItem("hasRegister")
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        window.location.href = "/?logout=succes"
   return(<></>)
}

export default Logout
