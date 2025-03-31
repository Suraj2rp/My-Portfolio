import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // State for message
  const [showMessage, setShowMessage] = useState(false); // Controls message visibility

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setShowMessage(false);

    emailjs
      .send(
        "service_uwih269", // Replace with EmailJS Service ID
        "template_jfw0ear", // Replace with EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "RI3svuwWP5qc6uFi5" // Replace with EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage("✅ Message sent successfully! I'll get back to you soon.");
          setShowMessage(true);
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        () => {
          setLoading(false);
          setSuccessMessage("❌ Failed to send message. Please try again.");
          setShowMessage(true);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : "Send Message"}
        </button>
      </form>

      {/* Success/Error Message with Auto-Hide and Dismiss Button */}
      {showMessage && (
        <div className="message-container">
          <p>{successMessage}</p>
          <button className="dismiss-btn" onClick={() => setShowMessage(false)}>
            ✖
          </button>
        </div>
      )}
    </section>
  );
};

export default Contact;
