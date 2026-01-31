import "./Frontend.css";

function Backend({ onBack }) {
    return (
        <section className="service-detail" id="services">

            <div className="service-top">
                <button className="btn back-btn" onClick={onBack}>
                    ← Back to Services
                </button>
            </div>

            <h1>Backend Development</h1>

            <p>
                I specialize in building secure, scalable, and maintainable backend systems
                that power modern applications. My backend development focuses on clean
                architecture, efficient data handling, and reliable API design.
                I ensure that business logic is well-structured and easy to maintain.
                Using proven Java-based technologies and modern frameworks,
                I develop backend services that are robust, performant, and secure.
                Data integrity, system stability, and clear separation of concerns
                are core priorities throughout the development process.
            </p>

            <h3>Core Backend Expertise</h3>
            <ul>
                <li>Server-side application development using Java</li>
                <li>RESTful API design and implementation</li>
                <li>Business logic and layered architecture</li>
                <li>Database connectivity and transaction management</li>
                <li>Security and data protection best practices</li>
            </ul>

            <h3>Technologies I Work With</h3>
            <ul>
                <li>JDBC for database connectivity</li>
                <li>Servlets and JSP for server-side applications</li>
                <li>Hibernate and JPA for ORM and persistence</li>
                <li>Spring Framework (Core, MVC)</li>
                <li>Spring Boot for production-ready backend services</li>
            </ul>

            <h3>Tools & Workflow</h3>
            <ul>
                <li>Eclipse IDE for Java and enterprise development</li>
                <li>Maven for dependency management and build automation</li>
                <li>Postman for API testing and validation</li>
                <li>MySQL for relational database management</li>
                <li>SQL*Plus for Oracle database querying and administration</li>
            </ul>

            <h3>Backend Development Process</h3>
            <ul>
                <li>Analyze system requirements and data flow</li>
                <li>Design layered architecture (Controller, Service, DAO)</li>
                <li>Implement APIs and core business logic</li>
                <li>Integrate database and ORM mappings</li>
                <li>Test endpoints and optimize performance</li>
            </ul>

            <h3>What You Can Expect</h3>
            <ul>
                <li>Clean, modular, and maintainable backend code</li>
                <li>Secure and scalable application architecture</li>
                <li>Well-structured APIs with clear contracts</li>
                <li>Reliable integration with frontend systems</li>
            </ul>

        </section>
    );
}

export default Backend;
