import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import Splash from '../components/Splash'

const Content = () => {
    return (
    <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-pm">
        <h1 className="m-0">404</h1>
        <p>Page not found.</p>
    </div>
    )
}

const F404 = () => {
    return (
     <>
        <Splash />
        <Content />
        <Footer />
     </>
    )
}

export default F404