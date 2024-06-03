// src/components/Contact.js
import React from "react";
import "../styles/Contact.css";

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
