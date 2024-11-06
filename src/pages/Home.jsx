import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReadMoreReact from 'read-more-react'
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import {
    Navigation
} from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import Wave from 'react-wavify'

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const HeroBanner = () => {

    return (
        <>
        <header className="w-100 hero-home align-items-center flex-wrap d-flex" id="home">
        <div className="text-light container justify-content-center d-flex flex-column" data-aos="fadeInTop" style={ { width: "auto", height: "100%" }}>
            <TypeAnimation
              sequence={[
                'Teknik Informatika',
                1000,
                '',
                1000,
                'Teknik Informatika',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
               data-aos="fade-up" className="fw-bold"
            />
           <h4 data-aos="fade-up" data-aos-delay="500">Fakultas Teknik dan Sains.</h4>
             <button onClick={() => window.location.href = "/bergabung"} className="btn-cta-home text-pm col-6 px-1 py-2" data-aos="fade-up" data-aos-delay="800">Bergabung</button>
        </div>
        <div className="py-4 container p-0 text-light section-video d-flex flex-column" data-aos="fade-up" data-aos-delay="1200" style={ { width: "330px", height: "auto", background: "#27005D", zIndex: "99", backdropFilter: "blur(4px)", borderRadius: "25px" }}>
            <h1 className="fw-bold container">UIKA Bogor.</h1>
            <p className="container wow fadeIn">
                Universitas Ibn Khaldun Bogor atau disingkat UIKA adalah sebuah perguruan tinggi Islam swasta di Kota Bogor, Jawa Barat, yang didirikan oleh para tokoh ulama di Bogor dan merupakan kampus Islam tertua di kota tersebut.
            </p>
            <video controls src="/video.mp4" className="my-3"></video>
            <a className="container wow fadeIn" href="#ab-prestasi" style={ { color: "yellow" }}>Lihat prestasi kami <i className="bi bi-arrow-right"></i></a>
            
        </div>
         <Wave fill='#FFFFFF'
            paused={false}
            style={{ display: 'flex' }}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.15,
              points: 3
            }}
            className="wave-custom"
             />
        
        </header>
        </>
    )
}

const About = () => {
    const [isExpanded,
        setIsExpanded] = useState(false);

    // Function to toggle the expanded state
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <section className="d-flex flex-column about-section pb-4 mb-4" id="ab-desk">
            <div className="container-fluid d-flex flex-column my-3">
                <h1 className="text-pm fw-bold m-0" data-aos="fade-up">About PSTI</h1>
                <div>
                    {/* Paragraf pertama - Selalu terlihat */}
                    <p data-aos="fade-up" data-aos-delay="500">
                        PSTI merupakan program studi yang ke empat berdiri di fakultas Teknik dan Sains. Seiring dengan perkembangan kebutuhan akan tenaga teknik di bidang Komputerisasi, Fakultas Teknik dan Sains memiliki 7 program studi yaitu Teknik Informatika, Teknik Mesin, Teknik Elektro, Teknik Informatika, Rekayasa Pertanian dan Biosistem, Sistem Informasi, dan Ilmu lingkungan. Kemajuan Teknologi informasi mendorong calon mahasiswa yang berminat untuk mendalami bidang Informatika. Meskipun demikian, mahasiswa baru di PSTI UIKA tetap ada tiap tahunnya
                        {!isExpanded && (
            <span>
                            ..<button onClick={toggleExpand} style={ { border: 'none', background: 'none', color: 'blue', cursor: 'pointer' }}>read more</button>
                        </span>
        )}
        </p>
                    {/* Additional paragraphs - Hidden initially, shown when expanded */}
                    {isExpanded && (
            <>
            <p className="d-none">
                            Alumni angkatan pertama telah menjadi salah satu corong publikasi bagi PSTI, yang memperkenalkan keberadaan program studi pada kerabat dan kolega. Upaya peningkatan kualitas terus diupayakan salah satunya adalah dengan penerapan sistem penjaminan mutu internal dan sistem manajemen operasional pendidikan ISO 21001 serta meraih peringkat akreditasi B pada tahun 2019. Mahasiswa dimotivasi agar dapat berperan aktif dalam kegiatan kompetisi yang bersifat akademik maupun non akademik. Kerja sama jurusan dalam bidang pelayanan dan pengabdian masyarakat juga terus ditingkatkan.
            </p>

            <p className="">
                            Pada tahun 2015, PSTI dan FTS melakukan perbaikan secara menyeluruh dan komprehensif, mulai dari peningkatan kualitas dan kuantitas SDM, perbaikan manajemen, perbaikan proses belajar mengajar, peningkatan secara berkala di bidang sarana dan prasarana, serta peninjauan secara berkala kurikulum PSTI, sehingga pada tahun 2019, peringkat akreditasi PSTI UIKA Bogor berada di posisi B.
            </p>

            <p className="">
                            Posisi PSTI UIKA Bogor di tingkat Nasional maupun internasional merupakan hasil kegiatan para Dosen Tetap Pembagi Rasio (DTPR) melalui kegiatan seminar, workshop, serta publikasi skala internasional. Dalam skala nasional, PSTI UIKA mendapatkan atensi dari PTN dan PTS di wilayah timur dan barat, sebagai tempat melaksanakan kegiatan kampus merdeka, yaitu Pertukaran Mahasiswa Merdeka. Selain itu, keterlibatan DTPR sebagai tenaga ahli di beberapa Kementerian dan Lembaga-lembaga Nasional merupakan salah satu bukti bahwa secara kinerja DTPR diperhitungkan secara nasional.
            </p>

            <p className="">
                            Skala Kota dan Kabupaten Bogor, PSTI telah mendapat pengakuan yang baik dari kelompok masyarakat, pemerintah, serta industri. Hal ini dapat ditelusuri dari hasil tracer study. Beberapa alumni PSTI saat ini menjabat posisi penting di Dinas. Sedangkan, untuk kegiatan mahasiswa meraih beberapa prestasi.
            </p>

            <p className="">
                            Kondisi eksternal yang sangat mengancam eksistensi PSTI UIKA adalah pandemi COVID-19 pada tahun 2020 sampai dengan 2021. Kebijakan pemerintah untuk menghentikan semua kegiatan perkuliahan tatap muka, penelitian, dan pengabdian masyarakat cukup mempengaruhi kinerja PSTI. Meskipun demikian, kinerja dosen cukup baik di masa pandemi, dengan semakin banyaknya jumlah karya tulis dosen di jurnal-jurnal nasional maupun internasional..<button onClick={toggleExpand} style={ { border: 'none', background: 'none', color: 'blue', cursor: 'pointer' }}>read less</button>
            </p> < />
        )}
        </div>
        </div>
                    <div className="w-100 image-bdrop-about pt-5" data-aos="zoom-in" style={ { height: "150px", background: "url('/bdrop-uika3.jpg') center center", backgroundSize: "cover", marginTop: "60px"}}></div>
        </section>
    )
}

const VisiMisi = () => {
    return (
        <section className="d-flex flex-column visimisi-section  pt-5 text-center text-pm" style={ { marginTop: "40px", marginBottom: "80px" }} id="ab-vm">
                    <div className="d-flex flex-column">
                        <h1 data-aos="fade-up" className="m-0 fw-bold">Visi</h1>
                        <p data-aos="fade-up" data-aos-delay="500" className="mb-5 container-fluid">
                            Menjadi Program Studi Terkemuka Bidang Informatika Dengan Lulusan Islami Berdaya Saing
                            Regional Tahun 2025.
        </p>
                        <h1 className="m-0 fw-bold" data-aos="fade-up">Misi</h1>
                        <div className="w-100 mb-5 mt-2 text-light d-flex gap-3 overflow-x-auto" data-aos="fade-up" data-aos-delay="500">
                            <div className="box-misi py-2 container mx-2 d-flex flex-column">
                                <span className="fw-bold">I.</span>
                                <p className="m-0">
                                    Meningkatkan kualitas Tridharma Program Studi secara berkelanjutan.
            </p>
            </div>

                            <div className="box-misi py-2 container mx-2 d-flex flex-column">
                                <span className="fw-bold">II.</span>
                                <p className="m-0">
                                    Mengembangkan budaya inovasi dalam ilmu pengetahuan.
                </p>
            </div>

                            <div className="box-misi py-2 container mx-2 d-flex flex-column">
                                <span className="fw-bold">III.</span>
                                <p className="m-0">
                                    Meningkatkan akses dan peran program studi bagi peningkatan taraf dan kualitas hidup masyarakat.
                </p>
            </div>

                            <div className="box-misi py-2 container mx-2 d-flex flex-column">
                                <span className="fw-bold">IV.</span>
                                <p className="m-0">
                                    Meningkatkan kualitas penyelenggaraan tata pamong.
                </p>
            </div>
        </div>
                        <h1 data-aos="fade-up" className="m-0 text-pm fw-bold">Tujuan</h1>
                        <div className="w-100 mb-5 mt-2 text-light flex-wrap justify-content-center d-flex gap-3">
                            <div className="box-tujuan justify-content-center align-items-center container mx-2 d-flex flex-column" data-aos="fade-up" data-aos-delay="500">
                                <img src="/hijab.svg" className="icon-tujuan" />
                                <p className="m-0 mx-3">
                                    Menghasilkan lulusan islami berdaya saing regional melalui pelaksanaan kegiatan Tridharma.
            </p>
            </div>

                            <div className="box-tujuan justify-content-center align-items-center container mx-2 d-flex flex-column" data-aos="fade-up" data-aos-delay="500">
                                <img src="/handshake.svg" className="icon-tujuan" />
                                <p className="m-0 mx-3">
                                    Menjalin kemitraan dengan para pihak untuk menghasilkan produk penelitian inovatif bidang informatika yang berbasis laboratorium keilmuan Geoinformatics Spasial, Software Engineering, Computer System and Networking, dan Artificial Intelligence.
                </p>
            </div>

                            <div className="box-tujuan justify-content-center align-items-center container mx-2 d-flex flex-column" data-aos="fade-up" data-aos-delay="500">
                                <img src="/book.svg" className="icon-tujuan" />
                                <p className="m-0 mx-3">
                                    Mengembangkan ilmu pengetahuan dan teknologi serta budaya inovasi melalui percepatan penyerapan teknologi baru dan penyesuaian kurikulum agar dapat menjadi Program Studi terkemuka.
                </p>
            </div>

                            <div className="box-tujuan justify-content-center align-items-center container mx-2 d-flex flex-column" data-aos="fade-up" data-aos-delay="500">
                                <img src="/graduation.svg" className=" icon-tujuan" />
                                <p className="m-0 mx-3">
                                    Mengembangkan sistem tata pamong yang efektif dan efisien demi keberlanjutan serta penguatan kelembagaan Program Studi secara terencana dengan keluaran (output) dan dampak (outcome) yang jelas.
                </p>
            </div>
        </div>
        </div>
        </section>
    )
}

const Target = () => {
    return (
        <section className="d-flex flex-column target-section mb-4 py-5 bg-scm2" id="ab-struktur">
                    <div className="d-flex flex-column">
                        <h1 className="fw-bold container-fluid text-pm2" data-aos="fade-in">Sasaran PSTI</h1>
                        <ul className="ul-sasaran">
                            <li data-aos="fade-right" data-aos-delay="500">Penataan organisasi dan tata kerja di lingkungan Prodi Teknik Informatika.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Mengimplementasikan Sistem Penjaminan Mutu Internal (SPMI) dengan penerapan ISO 21001:2018.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Peningkatan Nilai Akreditasi program studi.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Peningkatan Pelayanan Prima.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Meningkatkan jumlah penerimaan mahasiswa melalui selective student.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Meningkatkan prestasi mahasiswa di bidang akademik dan non-akademik.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Meningkatkan jumlah lulusan.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Pemberdayaan peran orang tua dalam mendukung pengembangan akademik dan non-akademik.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Membangun dan membentuk kapasitas dan Brand Image (citra) Lulusan.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Meningkatkan peran alumni.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Meningkatkan kualifikasi mutu tenaga pendidik (dosen).</li>
                            <li data-aos="fade-right" data-aos-delay="500">Meningkatkan kualifikasi mutu tenaga kependidikan.</li>
                            <li data-aos="fade-right" data-aos-delay="500">Meningkatkan kompetensi profesionalisme, budaya kerja, dan disiplin kerja.</li>
        </ul>
                        <img data-aos="zoom-in" data-aos-delay="500" className="w-100 mt-5 mb-3" src="struktur.jpeg" alt="" />
        </div>
        </section>
    )
}

const Prestasi = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <section className="d-flex flex-column prestasi-section mb-4 py-5 " id="ab-prestasi">
                    <div className="d-flex text-pm flex-column">
                        <h1 className="m-0 container fw-bold" data-aos="fade-up">Prestasi Kami</h1>
                        <p className="m-0 container" data-aos="fade-up" data-aos-delay="500">
                            Prestasi dari mahasiswa program studi teknik informatika fakultas teknik dan sains UIKA Bogor.
        </p>
                        <Swiper
            modules={[Navigation]}
            navigation={ {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper)=> {
                // Update navigasi button setelah inisialisasi swiper
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            className="w-100 mt-3"
            breakpoints={ {
                100: {
                    spaceBetween: 280,
                    slidesPerView: 2
                },
                768: {
                    spaceBetween: 300,
                    slidesPerView: 4
                },
            }}
            >
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Juara 1</h2>
                                    <p className="m-0 container text-light">
                                        Lomba Gelaran  Inovasi Daerah (GID)
            </p>
                                    <p class="mt-3 pt-5 container text-light">
                                        Bappedalitbang Kabupaten Bogor - 2020
            </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Juara 2</h2>
                                    <p className="m-0 container text-light">
                                        Lomba Gelaran  Inovasi Daerah (GID)
                </p>
                                    <p class="mt-3 pt-5 container text-light">
                                        Bappedalitbang Kabupaten Bogor - 2020
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Juara 3</h2>
                                    <p className="m-0 container text-light">
                                        Lomba Gelaran  Inovasi Daerah (GID)
                </p>
                                    <p class="mt-3 pt-5 container text-light">
                                        Bappedalitbang Kabupaten Bogor - 2020
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">13 Besar</h2>
                                    <p className="m-0 container text-light">
                                        Pemilihan Mahasiswa Berprestasi Tk. LLDIKTI Wilayah IV
                </p>
                                    <p class="mt-4 pt-2 container text-light">
                                        LLDIKTI Wilayah IV Jawa Barat & Banten - 2021
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Juara 1</h2>
                                    <p className="m-0 container text-light">
                                        Lomba Karya Tulis
                </p>
                                    <p class="mt-3 pt-5 container text-light">
                                        Agri-Informatika JIKA - 2021
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Medali Perunggu</h2>
                                    <p className="m-0 container text-light">
                                        Unjuk Gelar Porprov 2022
                </p>
                                    <p class="mt-3 pt-5 container text-light">
                                        Porprov XIV 2022 KONI Jawa Barat - 2022
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Medali Perunggu</h2>
                                    <p className="m-0 container text-light">
                                        Lomba Berbaris Jarak Pendek 800 Meter Mix Porprov 2022
                </p>
                                    <p class="mt-4 pt-4 container text-light">
                                        Porprov XIV 2022 KONI Jawa Barat - 2022
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Medali Perak</h2>
                                    <p className="m-0 container text-light">
                                        Lomba Berbaris Jarak Pendek 800 Meter Mix Porprov 2022
                </p>
                                    <p class="mt-4 pt-4 container text-light">
                                        Porprov XIV 2022 KONI Jawa Barat - 2022
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Juara 1</h2>
                                    <p className="m-0 container text-light">
                                        Gelaran Inovasi Daerah (GID)
                </p>
                                    <p class="mt-3 pt-5 container text-light">
                                        Bappedalitbang Kabupaten Bogor - 2022
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-prestasi container">
                                <div className="box-prestasi shadow-sm">
                                    <img src="/bdrop-uika2.jpeg" alt="" />
                                    <h2 className="text-light mb-0 mt-3 container fw-bold">Pertukaran Pelajar ke Negara Malaysia</h2>
                                    <p className="m-0 container text-light">
                                        IISMA 2022
                </p>
                                    <p class="mt-4 pt-2 container text-light">
                                        KEMDIKBUDRISTEKDIKTI - 2022
                </p>
            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            </SwiperSlide>
                        </Swiper>
                        <div className="d-flex mt-2 container-fluid gap-2">
                            <button ref={prevRef} style={ { zIndex: "9999999" }} className="btn-nav-swiper">
                                <img src="/left-arrow.svg" alt="" />
                            </button>
                            <button ref={nextRef} className="btn-nav-swiper">
                                <img src="/right-arrow.svg" alt="" />
                            </button>
        </div>
        </div>
        </section>
    )
}

const Contact = () => {
    return (
        <section className="d-flex flex-column contact-section mb-4 py-5 text-pm" id="contact">
                    <div className="d-flex container-fluid flex-column">
                        <h1 data-aos="fade-up" className="m-0 container fw-bold">Kontak Kami</h1>
                        <iframe data-aos="zoom-in" data-aos-delay="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6869213033633!2d106.78983687756308!3d-6.561146293432042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c46c9a3721e9%3A0x270b284c8a1f7e49!2sUniversitas%20Ibn%20Khaldun%20Bogor!5e0!3m2!1sid!2sid!4v1730597493702!5m2!1sid!2sid" width="100%" height="300" style={ { border: "0" }} allowfullscreen="" className="mt-1" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <hr />
                        <div className="d-flex flex-wrap gap-4" data-aos="fade-in" data-aos-delay="500">
                            <div className="my-2 align-items-center d-flex gap-3">
                                <i className="bi bi-envelope display-1"></i>
                                <div className="d-flex flex-column">
                                    <span>Email</span>
                                    <a href="#" className="m-0" style={ { textDecoration: "none" }}>youremail@gmail.com</a>
        </div>
        </div>
                            <div className="my-2 align-items-center d-flex gap-3">
                                <i className="bi bi-telephone display-1"></i>
                                <div className="d-flex flex-column">
                                    <span>Phone</span>
                                    <a href="#" className="m-0" style={ { textDecoration: "none" }}>+628159118035</a>
            </div>
        </div>
        </div>
        </div>
        </section>
    )
}

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])
    return (
        <>
        <Navbar />
        <HeroBanner />
        <About />
        <VisiMisi />
        <Target />
        <Prestasi />
        <Contact />
        <Footer />
        <BackToTop /> < />
    )
}

export default Home