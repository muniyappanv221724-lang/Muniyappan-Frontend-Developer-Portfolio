import { useState, useCallback, useMemo } from "react";
import "./Contact.css";

/* =========================
   Initial State
========================= */
const INITIAL_STATE = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

/* =========================
   Validation Helpers
========================= */
const validateField = (name, value) => {
    if (!value.trim()) return `${name} is required`;

    if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Invalid email address";
    }

    return "";
};

function Contact() {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    /* =========================
       Handle Change
    ========================= */
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    }, []);

    /* =========================
       Form Validation
       (Fixed: works only after typing)
    ========================= */
    const isFormValid = useMemo(() => {
        if (Object.keys(errors).length === 0) return false;

        return (
            Object.values(formData).every((v) => v.trim()) &&
            Object.values(errors).every((e) => !e)
        );
    }, [formData, errors]);

    /* =========================
       Submit Handler
    ========================= */
    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();

            // Final validation check on submit
            const newErrors = {};
            Object.keys(formData).forEach((key) => {
                const error = validateField(key, formData[key]);
                if (error) newErrors[key] = error;
            });

            setErrors(newErrors);

            if (Object.keys(newErrors).length > 0) return;

            try {
                setStatus("loading");

                const response = await fetch("http://localhost:8080/api/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error("Request failed");
                }

                await response.json();

                setStatus("success");
                setFormData(INITIAL_STATE);
                setErrors({});
            } catch (error) {
                console.error(error);
                setStatus("error");
            }
        },
        [formData]
    );

    return (
        <section className="contact" id="contact" aria-labelledby="contact-heading">
            <div className="contact-particles">
                <span></span><span></span><span></span><span></span><span></span>
            </div>

            <h2 id="contact-heading" className="heading">
                Contact <span>Me</span>
            </h2>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-card">
                        <i className="fa-solid fa-phone"></i>
                        <h3>Phone</h3>
                        <a href="tel:+916374371878">+91 6374371878</a>
                    </div>

                    <div className="info-card">
                        <i className="fa-solid fa-envelope"></i>
                        <h3>Email</h3>
                        <a href="mailto:muniyappanv221724@gmail.com">
                            muniyappanv221724@gmail.com
                        </a>
                    </div>

                    <div className="info-card">
                        <i className="fa-solid fa-location-dot"></i>
                        <h3>Location</h3>
                        <p>Chennai, Tamil Nadu, India</p>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="field">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <label>Your Name</label>
                            {/* {errors.name && <small>{errors.name}</small>} */}
                        </div>

                        <div className="field">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label>Your Email</label>
                            {/* {errors.email && <small>{errors.email}</small>} */}
                        </div>

                        <div className="field">
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <label>Subject</label>
                            {/* {errors.subject && <small>{errors.subject}</small>} */}
                        </div>

                        <div className="field textarea">
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <label>Your Message</label>
                            {/* {errors.message && <small>{errors.message}</small>} */}
                        </div>

                        {/* ✅ BUTTON IS NOW CLICKABLE */}
                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="success">Message sent successfully 🚀</p>
                        )}
                        {status === "error" && (
                            <p className="error">Something went wrong. Try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
