import React, { useState, useEffect } from "react";
import "../../Navbar.css";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const checkScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;

            setScrollProgress(progress);

            if (scrollTop > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", checkScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    const handleTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div 
            className="position-fixed justify-content-center align-items-center text-light shadow-lg text-center d-flex animate__bounceUp"
            style={{
                opacity: visible ? "1" : "0", 
                bottom: "30px", 
                right: "25px", 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                background: "rgba(39, 0, 93, 1)", 
                zIndex: "9999999", 
                cursor: "pointer",
                transition: "opacity 0.5s ease",
            }} 
            onClick={handleTop}
        >
            <svg width="50" height="50" viewBox="0 0 36 36" className="circular-progress">
                <circle
                    cx="18" 
                    cy="18" 
                    r="16" 
                    fill="none" 
                    stroke="yellow" 
                    strokeWidth="3" 
                    strokeDasharray="100" 
                    strokeDashoffset={100 - scrollProgress}
                    transform="rotate(-90 18 18)" 
                    style={{ transition: "stroke-dashoffset 0.1s ease" }}
                />
            </svg>
            <i className="bi bi-arrow-up-short" style={{ position: "absolute",color: 'yellow' }} />
        </div>
    );
};

export default BackToTop;
