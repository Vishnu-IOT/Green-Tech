import { useState, useEffect, useRef } from "react";
import "./scrollTop.css";

const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const btnRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const docH = document.documentElement.scrollHeight - window.innerHeight;

            setVisible(scrollY > 320);
            setProgress(docH > 0 ? Math.min((scrollY / docH) * 100, 100) : 0);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // SVG circle progress values
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <button
            ref={btnRef}
            className={`stt-root ${visible ? "stt-visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            {/* Circular progress ring */}
            <svg className="stt-ring" viewBox="0 0 52 52" aria-hidden="true">
                {/* Track */}
                <circle
                    className="stt-ring-track"
                    cx="26" cy="26" r={radius}
                    fill="none"
                    strokeWidth="1.5"
                />
                {/* Progress arc */}
                <circle
                    className="stt-ring-progress"
                    cx="26" cy="26" r={radius}
                    fill="none"
                    strokeWidth="1.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Arrow icon — pure CSS, no react-icons */}
            <span className="stt-arrow" aria-hidden="true" />
        </button>
    );
};

export default ScrollTopButton;