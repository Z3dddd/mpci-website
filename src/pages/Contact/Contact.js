import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PageHero from '../../components/PageHero/PageHero';
import './Contact.css';

function Contact() {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };
  
  // Example location in Riyadh, Saudi Arabia (Kingdom Centre area)
  const defaultCenter = {
    lat: 24.711667,
    lng: 46.674167
  };

  return (
    <div className="contact">
      <PageHero 
        title="Contact Us"
        description="Get in touch with our team for inquiries and support"
      />

      <div className="contact-container">
        <section className="contact-info">
          <h2>Our Office</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>King Fahd Road</p>
            <p>Al Olaya District</p>
            <p>Riyadh, Saudi Arabia</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+966 51 123 4567</p>
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