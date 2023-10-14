import React from "react";
import "./contact.css";
import Linkedin from "../../assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contacts">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"></span>Please fill out the form below to
        discuss any work oppurtinity
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="messg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submittn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/prabhave-venkata-282708116/">
              <img src={Linkedin} alt="Youtube" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;