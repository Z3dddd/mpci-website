import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for your next project</p>
      </section>

      <div className="contact-container">
        <section className="contact-info">
          <h2>Our Office</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Business Avenue</p>
            <p>Industrial District</p>
            <p>Dubai, UAE</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+971 4 123 4567</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@yourcompany.com</p>
          </div>
          <div className="info-item">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </section>

        <section className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select Service</option>
                <option value="modular-construction">Modular Construction</option>
                <option value="steel-fabrication">Steel Fabrication</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
      </div>

      <section className="map">
        {/* Placeholder for Google Maps integration */}
        <div className="map-container"></div>
      </section>
    </div>
  );
}

export default Contact; 