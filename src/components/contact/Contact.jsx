import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_che8ssv",
        "template_4ten6u6",
        formRef.current,
        "user_XF0AErQ0NZHzZWSYAirU7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document
      .querySelectorAll("form input")
      .forEach((input) => (input.value = ""));
    document.querySelector("form textarea").value = "";
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-wrapper__left">
          <h1 className="contact-left__title">Let's discuss your project</h1>
          <div className="contact-left__info">
            <div className="contact-info__item">
              <img
                src="https://e7.pngegg.com/pngimages/524/402/png-clipart-trattoria-da-remo-2-email-villa-toscana-telephone-emergency-love-miscellaneous.png"
                alt="phone-icon"
                className="contact-info__icon"
              />
              +99891 123 45 67
            </div>
            <div className="contact-info__item">
              <img
                src="https://img2.freepng.ru/20180414/xzq/kisspng-amnesty-international-usa-email-computer-icons-mes-email-icon-5ad18301d89e53.7291107615236800018873.jpg"
                alt="phone-icon"
                className="contact-info__icon"
              />
              contact@gmail.com
            </div>
            <div className="contact-info__item">
              <img
                src="https://w7.pngwing.com/pngs/505/750/png-transparent-computer-icons-house-house-angle-building-text.png"
                alt="phone-icon"
                className="contact-info__icon"
              />
              245 King Street, Australia
            </div>
          </div>
        </div>
        <div className="contact-wrapper__right">
          <p className="contact-right__desc">
            <b>What's your story?</b> Get in touch. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Illo amet, assumenda accusamus nulla
            eos iste!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Phone number"
              name="user_number"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              name="message"
              placeholder="Message"
              id=""
              cols="30"
              rows="7"
            ></textarea>
            <br />
            <button className="contact-button">Submit</button>
            {done && (
              <p
                style={{
                  color: "crimson",
                  fontSize: "16px",
                  display: "inline-block",
                  marginLeft: "10px",
                  fontWeight: "500",
                }}
              >
                Thank you
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
