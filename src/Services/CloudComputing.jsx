import "./Frontend.css";

function CloudComputing({ onBack }) {
    return (
        <section className="service-detail" id="services">

            <div className="service-top">
                <button className="btn back-btn" onClick={onBack}>
                    ← Back to Services
                </button>
            </div>

            <h1>Cloud Computing</h1>

            <p>
                I specialize in cloud computing concepts and services that enable
                scalable, reliable, and secure application deployment.
                My cloud knowledge focuses on understanding core cloud models,
                service types, and real-world deployment strategies.
                I work with cloud platforms to support modern applications
                by improving availability, scalability, and performance.
            </p>

            <h3>Core Cloud Concepts</h3>
            <ul>
                <li>Cloud service models: IaaS, PaaS, SaaS</li>
                <li>Deployment models: Public, Private, Hybrid</li>
                <li>Scalability and elasticity</li>
                <li>High availability and fault tolerance</li>
                <li>Cloud security fundamentals</li>
            </ul>

            <h3>AWS</h3>
            <ul>
                <li>EC2 for compute services</li>
                <li>S3 for object storage</li>
                <li>RDS for managed databases</li>
                <li>IAM for access management</li>
                <li>Basic cloud monitoring and cost awareness</li>
            </ul>

            <h3>Microsoft Azure</h3>
            <ul>
                <li>Virtual Machines for compute resources</li>
                <li>Azure Storage services</li>
                <li>Azure SQL Database</li>
                <li>Identity and access management</li>
                <li>Cloud resource organization</li>
            </ul>

            <h3>Cloud Workflow</h3>
            <ul>
                <li>Understand application requirements</li>
                <li>Select appropriate cloud services</li>
                <li>Deploy and configure resources</li>
                <li>Monitor performance and availability</li>
                <li>Ensure security and cost efficiency</li>
            </ul>

            <h3>What You Can Expect</h3>
            <ul>
                <li>Reliable and scalable cloud-based solutions</li>
                <li>Secure and well-structured cloud resources</li>
                <li>Understanding of real-world cloud architectures</li>
                <li>Support for modern application deployments</li>
            </ul>

        </section>
    );
}

export default CloudComputing;
