import React from "react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Submitted data:", formData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div id="contact-form">
      <h4>Send a Message</h4>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>Your Message: </label>
        <br />
        <textarea
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <br />
        <button id="contact-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
