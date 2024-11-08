

const Nav = ({content}) => {
    return (
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Dashboard - FTS UIKA Bogor</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="/dashboard" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/dashboard/cms" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-stack" /> <span className="ms-1 d-none d-sm-inline">CMS</span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a className="dropdown-item" href="#">New project...</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
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