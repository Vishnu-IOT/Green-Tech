import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./PageLoader.css";

const PageLoader = () => {
    const location = useLocation();
    const [phase, setPhase] = useState("idle");
    const timers = useRef([]);

    const clear = () => timers.current.forEach(clearTimeout);

    useEffect(() => {
        clear();
        setPhase("enter");
        const t1 = setTimeout(() => setPhase("visible"), 10);
        const t2 = setTimeout(() => setPhase("exit"), 1200);
        const t3 = setTimeout(() => setPhase("idle"), 3000);
        timers.current = [t1, t2, t3];
        return clear;
    }, [location.pathname]);

    if (phase === "idle") return null;

    return (
        <div className={`gvl-root gvl-${phase}`}>
            <div className="gvl-grain" />

            <span className="gvl-corner gvl-tl" />
            <span className="gvl-corner gvl-tr" />
            <span className="gvl-corner gvl-bl" />
            <span className="gvl-corner gvl-br" />

            <div className="gvl-orb gvl-orb1" />
            <div className="gvl-orb gvl-orb2" />

            <div className="gvl-center">
                <div className="gvl-icon">♻</div>

                {/* GREEN */}
                <div className="gvl-word">
                    {"GREEN".split("").map((ch, i) => (
                        <span key={i} className="gvl-letter gvl-green" style={{ "--i": i }}>{ch}</span>
                    ))}
                </div>

                <div className="gvl-divider">
                    <span className="gvl-dline gvl-dl" />
                    <span className="gvl-dsym">◆</span>
                    <span className="gvl-dline gvl-dr" />
                </div>

                {/* VERSE */}
                <div className="gvl-word">
                    {"TECH".split("").map((ch, i) => (
                        <span key={i} className="gvl-letter gvl-verse" style={{ "--i": i + 6 }}>{ch}</span>
                    ))}
                </div>

                <p className="gvl-tagline">Engineering a Cleaner Tomorrow</p>
            </div>

            <div className="gvl-progress"><div className="gvl-bar" /></div>
        </div>
    );
};

export default PageLoader;