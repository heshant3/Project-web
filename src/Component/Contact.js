import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Css/Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send email using EmailJS
    emailjs
      .sendForm("service_t4oo0lx", "template_2j5i5dd", form.current, {
        publicKey: "oQw9kiCMbT9s_LE-1",
      })
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Error sending email!");
        }
      );

    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setFocused(false);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []); // empty dependency array to ensure effect runs only once on mount

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (name === "" || email === "" || phone === "" || message === "") {
      setFocused(false);
    }
  };

  return (
    <div className="container" id="contact">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp; &nbsp;
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp; &nbsp;
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={handleFormSubmit} autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className={focused || name ? "active" : ""}>
                Name
              </label>
              <span className={focused ? "focus" : ""}></span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className={focused || email ? "active" : ""}
              >
                Email
              </label>
              <span className={focused ? "focus" : ""}></span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                htmlFor="phone"
                className={focused || phone ? "active" : ""}
              >
                Phone
              </label>
              <span className={focused ? "focus" : ""}></span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label
                htmlFor="message"
                className={focused || message ? "active" : ""}
              >
                Message
              </label>
              <span className={focused ? "focus" : ""}></span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
