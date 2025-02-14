import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Contact.css';

function Contact() {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };
  
  // Example location in Dubai, UAE (Dubai Mall area)
  const defaultCenter = {
    lat: 25.197197,
    lng: 55.274376
  };

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
            <p>Business Bay</p>
            <p>Sheikh Zayed Road</p>
            <p>Dubai, UAE</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+971 4 123 4567</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@mpci.ae</p>
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
                <option value="prefabricated-solutions">Prefabricated Solutions</option>
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
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker
              position={defaultCenter}
              title="MPCI Office"
            />
          </GoogleMap>
        </LoadScript>
      </section>
    </div>
  );
}

export default Contact; 