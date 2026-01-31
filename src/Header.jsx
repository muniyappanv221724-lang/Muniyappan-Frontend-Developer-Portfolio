import { useEffect, useState } from "react";
import "./Header.css";

/* Navigation links */
const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    /* Lock body scroll when menu is open */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [menuOpen]);

    /* Close menu on ESC key */
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeMenu();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    /* Scroll detection (header style + active link) */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);

            let currentSection = "home";

            navLinks.forEach(link => {
                const section = document.getElementById(link.id);
                if (!section) return;

                const offsetTop = section.offsetTop - 200;
                const offsetBottom = offsetTop + section.offsetHeight;

                if (
                    window.scrollY >= offsetTop &&
                    window.scrollY < offsetBottom
                ) {
                    currentSection = link.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Mobile overlay */}
            <div
                className={`menu-overlay ${menuOpen ? "active" : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <a href="#home" className="logo">
                    Portfolio
                </a>

                {/* Menu Button */}
                <button
                    className={`menu-btn ${menuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Navigation */}
                <nav
                    className={`navbar ${menuOpen ? "active" : ""}`}
                    role="navigation"
                >
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={activeSection === link.id ? "active" : ""}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </header>
        </>
    );
}

export default Header;
