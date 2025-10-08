import React from "react";

export const ContactInfo = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-wrapper">
        {/* Contact Details Card */}
        <div className="contact-card slide-up">
          <h3>Contact Details</h3>
          <div className="contact-details">
            <div className="contact-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="phone"
              />
              <span className="label">Phone:</span>
              <span className="value">+91 9110778735</span>
            </div>

            <div className="contact-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="email"
              />
              <span className="label">Email:</span>
              <span className="value">shanmukhvemala@gmail.com</span>
            </div>

            <div className="contact-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="address"
              />
              <span className="label">Address:</span>
              <span className="value">
                Visakhapatnam - 530018, Andhra Pradesh, India
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Card */}
        <div className="contact-card slide-up">
          <h3>Links</h3>
          <div className="contact-details">
            <div className="contact-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt="LinkedIn"
              />
              <span className="label">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/vemala-shanmukha-venkata-laxman-rao-065648200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="value link"
              >
              shanmukh Vemala
              </a>
            </div>

            <div className="contact-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
              />
              <span className="label">GitHub:</span>
              <a
                href="https://github.com/Shannu1997-08/MYProfile.git"
                target="_blank"
                rel="noreferrer"
                className="value link"
              >
                github.com/shanmukhvemala
              </a>
            </div>

            <div className="contact-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
              <span className="label">Instagram:</span>
              <a
                href="https://www.instagram.com/shannu__08?igsh=Zmk0cXhuMDR1eWI4"
                target="_blank"
                rel="noreferrer"
                className="value link"
              >
                shannu_08😎
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
