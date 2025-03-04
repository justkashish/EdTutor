
import { Phone, Mail, MessageSquare } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in learning more about EdTutor's services."
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Contact form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <h1 className="contact-title">
            Get in Touch
          </h1>
          <p className="contact-description">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>

          <div className="contact-grid">
            {/* Contact Methods */}
            <div className="contact-methods">
              <h2 className="methods-title">Contact Methods</h2>
              
              <button
                onClick={handleWhatsAppClick}
                className="whatsapp-button"
              >
                <MessageSquare size={24} />
                <span>Chat on WhatsApp</span>
              </button>

              <div className="contact-info">
                <div className="info-item">
                  <Phone size={20} />
                  <span>+1 234 567 890</span>
                </div>
              </div>

              <div className="contact-info">
                <div className="info-item">
                  <Mail size={20} />
                  <span>contact@edtutor.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="form-title">Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="form-submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;