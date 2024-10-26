import React from "react";

function Contact() {
  return (
    <>
    <hr />
      <div className="contact">
        <div id="location">
          <h4>Contact</h4>
          <p>
            123 Main St, Suite 456 <br />
            Your City, ST 00000
          </p>
          <p>
            Phone: (555)555-5555
            <br />
            Email: name@business.com
          </p>
        </div>
        <div id="hours">
          <h4>Hours</h4>
          <ul>
            <li>Monday - Friday: 10:30am - 5:30pm</li>
            <li>Saturday, Sunday - Closed</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
