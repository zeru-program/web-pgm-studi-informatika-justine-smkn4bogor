

const Nav = ({content}) => {
    return (
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{background: "#27005D"}}>
            <div className="d-flex pt-3 flex-column align-items-center align-items-sm-start px-3 pt-2 text-primary min-vh-100">
              <a href="/" className="d-flex align-items-center mt-3 pb-3 mb-md-0 me-md-auto text-primary text-decoration-none">
                <span className="fs-5 d-none d-sm-inline text-light text-center">Dashboard - FTS UIKA Bogor</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="/dashboard" className="nav-link align-middle d-flex gap-3 px-0">
                    <i className="fs-4 bi-house"/> <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/dashboard/cms" className="nav-link align-middle d-flex gap-3 px-0">
                    <i className="fs-4 bi-stack" /> <span className="ms-1 d-none d-sm-inline">CMS</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/dashboard/prestasi" className="nav-link d-flex gap-3 align-middle px-0">
                    <i className="fs-4 bi-trophy" /> <span className="ms-1 d-none d-sm-inline">CRUD Prestasi</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/dashboard/berita" className="nav-link align-middle d-flex gap-3 px-0">
                    <i className="fs-4 bi-newspaper" /> <span className="ms-1 d-none d-sm-inline">CRUD BERITA</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/dashboard/account" className="nav-link align-middle d-flex gap-3 px-0">
                    <i className="fs-4 bi-person" /> <span className="ms-1 d-none d-sm-inline">RUD Account</span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://i.pinimg.com/736x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg" alt="hugenerd" width={30} height={30} className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1">user</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a className="dropdown-item" href="/logout">Sign out</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col w-100 overflow-hidden py-3">
            {content}
          </div>
        </div>
      </div>
    )
}

export default Nav