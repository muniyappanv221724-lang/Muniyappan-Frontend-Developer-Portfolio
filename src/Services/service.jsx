import "/src/Services/service.css";
import { memo, useMemo } from "react";

const SERVICES = [
    {
        id: "frontend",
        title: "Frontend Development",
        desc: "HTML, CSS, JavaScript, React",
        img: "/front-end-programming.png",
    },
    {
        id: "backend",
        title: "Backend Development",
        desc: "Java, Spring Boot, Node.js",
        img: "/backend-coding.png",
    },
    {
        id: "database",
        title: "Oracle SQL",
        desc: "Database management",
        img: "/database-storage.png",
    },
    {
        id: "cloud",
        title: "Cloud Computing",
        desc: "AWS & Azure",
        img: "/cloud-computing.png",
    },
];

const ServiceCard = memo(function ServiceCard({ title, desc, img, onClick }) {
    return (
        <article
            className="services-box"
            role="listitem"
            onClick={onClick}
            style={{ cursor: "pointer" }}
        >
            <img src={img} alt={`${title} icon`} loading="lazy" width="64" height="64" />
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className="service-btn">
                Learn More →
            </span>
        </article>
    );
});

function Service({ onSelect }) {
    const services = useMemo(() => SERVICES, []);

    return (
        <section className="services" id="services">
            <h2 className="heading">
                Our <span>Services</span>
            </h2>

            <div className="services-container" role="list">
                {services.map(service => (
                    <ServiceCard
                        key={service.id}
                        {...service}
                        onClick={() => onSelect(service.id)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Service;
