import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillPersonLinesFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1uhtrs3",
        "template_6y4frea",
        form.current,
        "QbXpxYp0HML_zpa79"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section id="contact" className="contact">
        <PageHeaderContent
          headerText="My Contact"
          icon={<BsFillPersonLinesFill size={40} />}
        />
        <div className="contact_content">
          {/* Animation left */}
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(-200px)" }}
            end={{ transform: "translateX(0)" }}
          >
            <h3 className="contact_content_header_text">Let's Talk</h3>
          </Animate>

          {/* Form animation right */}
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(200px)" }}
            end={{ transform: "translateX(0)" }}
          >
            <div className="contact_content_form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact_content_form_controlsWrapper">
                  <div>
                    <input
                      required
                      name="user_name"
                      className="inputName"
                      type="text"
                    />
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      required
                      name="user_email"
                      className="inputEmail"
                      type="email"
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email
                    </label>
                  </div>
                  <div>
                    <textarea
                      required
                      name="message"
                      className="inputDescription"
                      placeholder="Message"
                      maxLength={200}
                    />
                  </div>
                </div>
                <input className="submit-button" type="submit" value="Send" />
              </form>
            </div>
          </Animate>
        </div>
      </section>

      {/* Google Map */}
      <iframe
      title="Location Map"
        className="location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.3738030990941!2d85.37036216950911!3d23.97828392402445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49bf5943e5c6b%3A0xad1e67d7a4491ae3!2sHurhuru%2C%20Hazaribagh%2C%20Jharkhand%20825301!5e0!3m2!1sen!2sin!4v1724952920310!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
