import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import Splash from '../components/Splash'

const Content = () => {
    return (
    <div className="w-100 vh-100 d-flex flex-column text-center container justify-content-center align-items-center text-pm">
        <h1 className="m-0">Comming soon</h1>
        <p>Atau kamu bisa langsung ke Website resmi berikut <a href="https://www.uika-bogor.ac.id/">https://www.uika-bogor.ac.id/</a></p>
    </div>
    )
}

const Join = () => {
    return (
     <>
        <Splash />
        <Content />
        <Footer />
     </>
    )
}

export default Join