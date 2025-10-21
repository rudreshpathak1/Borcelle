import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to backend)
    console.log(form);
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-10 space-y-12 text-gray-700">

      {/* Header */}
      <div className="flex flex-col items-center px-3 sm:px-6 md:px-10 text-center space-y-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Contact <span className="text-primary">Us!</span>
        </h1>
        <p className="text-gray-800 text-sm sm:text-base max-w-md sm:max-w-2xl">
          We’d love to hear from you! Questions, feedback, or suggestions — reach out and we’ll respond promptly.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="space-y-2 p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl md:text-2xl font-semibold">📍 Address</h2>
          <p>123 Borcelle Street, Flavor Town, India</p>
        </div>
        <div className="space-y-2 p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl md:text-2xl font-semibold">📞 Phone</h2>
          <p>+91 98765 43210</p>
        </div>
        <div className="space-y-2 p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl md:text-2xl font-semibold">✉ Email</h2>
          <p>support@borcelle.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            required
            className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold">Connect With Us</h2>
        <p>
          Follow us for updates, special offers, and culinary inspiration:
        </p>
        <div className="flex justify-center md:justify-start gap-6 mt-2">
          <a href="#" className="text-blue-600 hover:underline">Facebook</a>
          <a href="#" className="text-blue-400 hover:underline">Twitter</a>
          <a href="#" className="text-pink-500 hover:underline">Instagram</a>
          <a href="#" className="text-blue-700 hover:underline">LinkedIn</a>
        </div>
      </div>

    </div>
  );
};

export default Contact;
