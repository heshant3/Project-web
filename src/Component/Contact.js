import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Css/Contact.css";
import { RiWhatsappLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
      const offset = window.innerHeight * 0.8; // Adjust this value according to when you want the animation to start

      if (element.getBoundingClientRect().top < offset) {
        controls.start({
          opacity: 1,
          y: 0,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send email using EmailJS
    emailjs
      .sendForm("service_xvyig2y", "template_2j5i5dd", form.current, {
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

  // Check if all required fields are filled
  const isFormValid = name !== "" && email !== "" && message !== "";

  return (
    <div className="container" id="contact">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            We're here to listen and assist you. Drop us a line or pay us a
            visit. We're eager to hear from you!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp; &nbsp;
              <p>Panda Tronic, SriLanka </p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp; &nbsp;
              <p>pandatroniclk@gmail.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p>+94 76 111 6438</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://wa.me/message/SOFTZIICGYYAM1">
                <RiWhatsappLine
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.3em",
                    verticalAlign: "sub",
                  }}
                />
              </a>
              <a href="https://web.facebook.com/pandatroniclk">
                <FaFacebookF
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.1em",
                    verticalAlign: "sub",
                  }}
                />
              </a>
              <a href="mailto:pandatroniclk@gmail.com">
                <MdOutlineEmail
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.5em",
                    verticalAlign: "text-bottom",
                  }}
                />
              </a>
              <a href="tel:+94761116438">
                <IoIosCall
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.5em",
                    verticalAlign: "text-bottom",
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form ref={form} onSubmit={handleFormSubmit} autoComplete="off">
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
            <input
              type="submit"
              value="Send"
              className={`btn ${!isFormValid ? "disabled" : ""}`}
              disabled={!isFormValid}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
