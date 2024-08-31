import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        {/* Contact Info and Form */}
        <div className="contact-main">
          <div className="contact-details">
            <h1>Свържете се с нас</h1>
            <p>
              Очакваме с нетърпение да получим вашето съобщение. Попълнете
              формуляра по-долу или се свържете с нас чрез информацията по-долу.
            </p>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="contact-text">
                Улица Бизнес 123, Етаж 100
                <br />
                Град, Държава, 12345
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div className="contact-text">+359 898 555 246</div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div className="contact-text">office@burgasstroi.com</div>
            </div>
          </div>

          <div className="contact-page-form">
            <h2>Изпратете ни съобщение</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Име</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Имейл</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Съобщение</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit">Изпрати</button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <h2>Намерете ни тук</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.958577684948!2d-0.12764748321274224!3d51.50735088205162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b33cf24d5b5%3A0x4a7ae5f083d3f39e!2sBuckingham%20Palace!5e0!3m2!1sen!2suk!4v1612796282386!5m2!1sen!2suk"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
