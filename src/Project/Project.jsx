import "./Project.css";
import { memo, useEffect, useRef, useState } from "react";

/* =======================
   Projects Data
======================= */
const PROJECTS = [
    {
        id: "project-1",
        title: "Modern Portfolio Website",
        subtitle: "Personal Brand • React",
        img: "/portfolio1.jpg",
        live: "http://localhost:5173/#",
        github: "https://github.com/yourname/portfolio",
        description:
            "A fully responsive personal portfolio built with React, focused on performance, accessibility, and modern UI animations.",
        features: [
            "Animated hero & section reveals",
            "Reusable component architecture",
            "ARIA roles & keyboard navigation",
            "Optimized lazy-loaded images",
        ],
        tech: ["React", "CSS3", "Vite"],
        year: "2025",
    },
    {
        id: "project-2",
        title: "E-Commerce UI",
        subtitle: "Frontend Concept",
        img: "/portfolio2.jpg",
        live: "#",
        github: "#",
        description:
            "A clean and modern e-commerce frontend featuring product filtering and micro-interactions.",
        features: [
            "Product filtering & sorting",
            "Cart UI with state",
            "Responsive grid layout",
        ],
        tech: ["React", "Context API", "CSS Grid"],
        year: "2024",
    },
    {
        id: "project-3",
        title: "Analytics Dashboard",
        subtitle: "Admin Panel • UI/UX",
        img: "/portfolio3.jpg", // ✅ CORRECT PATH
        live: "#",
        github: "#",
        description:
            "A modern analytics dashboard UI focused on data visualization, clarity, and smooth user experience.",
        features: [
            "Interactive charts & stats cards",
            "Dark mode friendly UI",
            "Reusable dashboard widgets",
            "Responsive admin layout",
        ],
        tech: ["React", "Chart.js", "CSS Variables"],
        year: "2024",
    },
];

/* =======================
   Project Card
======================= */
const ProjectCard = memo(function ProjectCard({
    title,
    subtitle,
    img,
    description,
    features,
    tech,
    live,
    github,
    year,
}) {
    const [open, setOpen] = useState(false);
    const cardRef = useRef(null);

    /* 3D Tilt Effect */
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const intensity = 12;

        const move = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX =
                (-(y - rect.height / 2) / rect.height) * intensity;
            const rotateY =
                ((x - rect.width / 2) / rect.width) * intensity;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-14px)
                scale(1.02)
            `;
        };

        const reset = () => {
            card.style.transform = "";
        };

        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", reset);

        return () => {
            card.removeEventListener("mousemove", move);
            card.removeEventListener("mouseleave", reset);
        };
    }, []);

    return (
        <article ref={cardRef} className="project-card reveal">
            <div className="project-img-wrapper">
                <img src={img} alt={title} loading="lazy" />
                <span className="project-year">{year}</span>
            </div>

            <div className="project-content">
                <h3>{title}</h3>
                <p className="project-subtitle">{subtitle}</p>
                <p className="project-description">{description}</p>

                <ul className="tech-stack">
                    {tech.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <button
                    className="details-btn"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-expanded={open}
                >
                    {open ? "Hide Details ↑" : "View Details ↓"}
                </button>

                <ul className={`project-features ${open ? "open" : ""}`}>
                    {features.map((feature) => (
                        <li key={feature}>✓ {feature}</li>
                    ))}
                </ul>

                <div className="project-actions">
                    <a href={live} target="_blank" rel="noreferrer">
                        Live
                    </a>
                    <a href={github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </article>
    );
});

/* =======================
   Projects Section
======================= */
export default function Project() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        document
            .querySelectorAll(".project-card")
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="projects" id="project">
            <h2 className="heading">
                Featured <span>Projects</span>
            </h2>

            <div className="projects-grid">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}
