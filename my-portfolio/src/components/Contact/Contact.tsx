import React, { useState } from 'react';
import './Contact.css';
import { PersonalInfo } from '../../types';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="section__heading">
        <h2>Get In Touch</h2>
        <p>Let's work together on your next project</p>
      </div>

      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__info-item">
            <h3>Email</h3>
            <p>{personalInfo.email}</p>
          </div>

          <div className="contact__info-item">
            <h3>Location</h3>
            <p>{personalInfo.location}</p>
          </div>

          <div className="contact__social">
            <h3>Follow Me</h3>
            <div className="social-links">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  <i className={`icon icon-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>

          <button type="submit" className="button button--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;