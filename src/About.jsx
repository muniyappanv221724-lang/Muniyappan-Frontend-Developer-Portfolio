import { memo, useEffect, useRef, useState, useCallback } from "react";
import "./About.css";

function About() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const toggle = useCallback(() => {
        setExpanded(v => !v);
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            id="about"
            className={`about ${visible ? "show" : ""} ${expanded ? "expanded" : ""}`}
            aria-labelledby="about-heading"
        >
            {/* IMAGE */}
            <div className="about-media">
                <img
                    src="/Doc1.jpg"
                    alt="Muniyappan V – Full Stack Developer"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            {/* STORY */}
            <div className="about-story">
                <h2 id="about-heading">
                    About <span>Me</span>
                </h2>

                {/* PRIMARY STORY */}
                <div className="story-lines">
                    <p>
                        I’m Muniyappan V, a Full Stack Developer who builds
                        software with intention — focusing not just on how
                        interfaces look, but on how systems behave, scale,
                        and hold up over time.

                        My approach emphasizes clean structure, clarity of
                        logic, and long-term maintainability, ensuring that
                        what I build today remains reliable and easy to
                        evolve tomorrow.

                        I pay close attention to performance, accessibility,
                        and edge cases, because great user experiences are
                        shaped as much by behavior and stability as they are
                        by visual polish.
                    </p>
                </div>

                {/* EXPANDED STORY */}
                <div className="story-more">
                    <p>
                        On the backend, I work with Java, Spring Boot,
                        Hibernate, and SQL-based databases to design secure,
                        scalable architectures. I enjoy modeling data
                        correctly, optimizing queries, and building APIs
                        that are predictable, resilient, and easy to
                        integrate.
                        On the frontend, I focus on clean component design,
                        thoughtful animations, and accessibility-first
                        development. I care about state flow, rendering
                        performance, and interaction patterns that make
                        interfaces feel intuitive and responsive.
                        Above all, I value writing code that other developers
                        can understand, trust, and maintain — because strong
                        software is not just built once, it’s refined over
                        time.
                    </p>
                </div>

                {/* TOGGLE BUTTON */}
                <button
                    type="button"
                    className="story-btn"
                    onClick={toggle}
                    aria-expanded={expanded}
                >
                    {expanded ? "Collapse story" : "Continue story"}
                </button>
            </div>
        </section>
    );
}

export default memo(About);
