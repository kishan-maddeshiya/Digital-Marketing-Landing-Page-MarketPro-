import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!form.name || !form.email || !form.message) {
            alert("Please fill all fields");
            return;
        }

        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: "", email: "", message: "" });
        }, 3000);


    };

    return (
        <AnimatedSection>
            <section id="contact" className="contact-section">


                <div className="contact-heading">
                    <h2>Get In Touch</h2>
                    <p>
                        Have a project in mind? Let’s build something amazing together.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        {submitted ? "Message Sent ✓" : "Send Message"}
                    </button>

                </form>

            </section>
        </AnimatedSection>


    );
}
