import React, { useRef } from 'react';
import './contact.css';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u73a4bm',
        'template_1oc7i7s',
        form.current,
        '9F1OOs5LK6Kw48pOo'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>addyaditya745@gmail.com</h5>
            <a href="mailto:addyaditya745@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Aditya Agarwal</h5>
            <a
              href="https://www.linkedin.com/in/aditya-agarwal-36b54b1b4/"
              target="__blank"
            >
              Connect with Me{' :)'}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="contact-message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary cur-po">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
