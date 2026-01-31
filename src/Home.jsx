import { useEffect, useState } from "react";
import "./Home.css";
import profileImg from "/Doc1.jpg";

function Home() {
    const roles = [
        "Full Stack Developer",
        "Java Developer",
        "React Developer",
        "Backend Engineer",
    ];

    const [currentRole, setCurrentRole] = useState(0);

    /* Auto text rotation (typing-like effect logic) */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home" id="home">
            {/* ================= LEFT CONTENT ================= */}
            <div className="home-content">
                <h3 className="intro-text">Hello, it's Me 👋</h3>

                <h1 className="name">
                    Muniyappan <span>V</span>
                </h1>

                <h2 className="role">
                    And I'm a <span>{roles[currentRole]}</span>
                </h2>

                <p className="description">
                    I am a <strong>Java Full Stack Developer</strong> with hands-on
                    experience in building <strong>scalable</strong>,
                    <strong> secure</strong>, and
                    <strong> high-performance web applications</strong>.
                    <br />
                    <br />
                    Passionate about clean code, modern UI/UX, and solving real-world
                    problems using Java, Spring Boot, React, and cloud-ready
                    architectures.
                </p>



                {/* ================= SOCIAL LINKS ================= */}
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/muniyappan-v-22e1724/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a
                        href="https://github.com/muniyappanv221724-lang"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>

                    <a
                        href="https://x.com/MuniyappanV2224"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                    >
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/_mu_niyappan__/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=100082536060312"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>

                {/* ================= CTA BUTTONS ================= */}
                <div className="cta-buttons">
                    <a href="#contact" className="btn primary">
                        Hire Me
                    </a>

                    <a
                        href="/public/MuniyappanV.pdf"
                        className="btn secondary"
                        download
                    >
                        Download CV
                    </a>
                </div>


            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="home-img">
                <div className="image-wrapper">
                    <img src={profileImg} alt="Muniyappan V" />
                </div>
            </div>
        </section>
    );
}

export default Home;
