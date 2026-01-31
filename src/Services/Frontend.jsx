import "./Frontend.css";

function Frontend({ onBack }) {
    return (
        <section className="service-detail" id="services">

            <div className="service-top">
                <button className="btn back-btn" onClick={onBack}>
                    ← Back to Services
                </button>
            </div>

            <h1>Frontend Development</h1>

            <p>
                I specialize in designing and developing modern,
                responsive,
                and accessible user interfaces that prioritize clarity and performance.
                My work focuses on creating intuitive experiences that feel natural across all devices and screen sizes.
                I combine clean visual design with well-structured frontend architecture to ensure long-term scalability.
                Performance optimization and accessibility are integrated from the earliest stages of development.
                I pay close attention to interaction details that enhance usability and user engagement. Using modern tools and frameworks,
                I deliver maintainable and efficient codebases. Every interface is tested for cross-browser consistency and reliability.
                My goal is to build frontend solutions that are both visually refined and technically robust.
            </p>

            <h3>Core Frontend Expertise</h3>
            <ul>
                <li>Responsive UI engineering for all screen sizes</li>
                <li>Component-based architecture for scalable applications</li>
                <li>Accessibility-first development (WCAG-focused)</li>
                <li>Performance tuning and asset optimization</li>
                <li>Cross-browser and cross-device consistency</li>
            </ul>

            <h3>Technologies I Work With</h3>
            <ul>
                <li>HTML5 & semantic markup</li>
                <li>CSS3, Flexbox, Grid, animations</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
            </ul>

            <h3>Tools & Workflow</h3>
            <ul>
                <li>VS Code with productivity-focused extensions</li>
                <li>Git & GitHub for version control</li>
                <li>Chrome DevTools for debugging and optimization</li>
                <li>Vite, npm, and modern build tooling</li>
            </ul>

            <h3>Design & UX Principles</h3>
            <ul>
                <li>Clear visual hierarchy and readable layouts</li>
                <li>Micro-interactions that enhance user feedback</li>
                <li>Consistency in spacing, typography, and motion</li>
                <li>Interfaces designed for real-world usability</li>
            </ul>

            <h3>My Development Process</h3>
            <ul>
                <li>Analyze requirements and user goals</li>
                <li>Structure responsive layouts and UI flow</li>
                <li>Develop reusable, maintainable components</li>
                <li>Implement accessibility and keyboard navigation</li>
                <li>Optimize performance and finalize testing</li>
            </ul>

            <h3>What You Can Expect</h3>
            <ul>
                <li>Clean, readable, and well-documented code</li>
                <li>Modern UI with attention to detail</li>
                <li>Scalable frontend architecture</li>
                <li>Reliable delivery and clear communication</li>
            </ul>
        </section>
    );
}

export default Frontend;
