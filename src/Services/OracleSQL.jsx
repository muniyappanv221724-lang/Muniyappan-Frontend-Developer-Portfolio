import "./Frontend.css";

function OracleSQL({ onBack }) {
    return (
        <section className="service-detail" id="services">

            <div className="service-top">
                <button className="btn back-btn" onClick={onBack}>
                    ← Back to Services
                </button>
            </div>

            <h1>Oracle SQL</h1>

            <p>
                I specialize in Oracle SQL for efficient data storage, retrieval,
                and management in enterprise-level applications. My experience
                includes writing optimized queries, designing relational schemas,
                and ensuring data accuracy and integrity. I focus on creating
                reliable and maintainable database solutions that support
                scalable backend systems.
            </p>

            <h3>Core Oracle SQL Expertise</h3>
            <ul>
                <li>Writing complex SQL queries and subqueries</li>
                <li>Database schema design and normalization</li>
                <li>Constraints, indexes, and relationships</li>
                <li>Joins, views, and sequences</li>
                <li>Data integrity and consistency management</li>
            </ul>

            <h3>Advanced SQL Concepts</h3>
            <ul>
                <li>Stored procedures and functions</li>
                <li>Triggers and cursors</li>
                <li>Transactions and ACID properties</li>
                <li>Performance tuning and query optimization</li>
                <li>Error handling and exception management</li>
            </ul>

            <h3>Tools & Workflow</h3>
            <ul>
                <li>SQL*Plus for query execution and administration</li>
                <li>Oracle Database for enterprise data storage</li>
                <li>Schema management and data validation</li>
                <li>Backup and recovery awareness</li>
                <li>Integration with Java applications (JDBC)</li>
            </ul>

            <h3>Database Development Process</h3>
            <ul>
                <li>Analyze data requirements and relationships</li>
                <li>Design normalized and efficient schemas</li>
                <li>Implement queries, procedures, and constraints</li>
                <li>Optimize performance and validate data</li>
                <li>Support backend and reporting needs</li>
            </ul>

            <h3>What You Can Expect</h3>
            <ul>
                <li>Optimized and readable SQL queries</li>
                <li>Reliable and consistent database design</li>
                <li>High data accuracy and integrity</li>
                <li>Seamless backend and database integration</li>
            </ul>

        </section>
    );
}

export default OracleSQL;
