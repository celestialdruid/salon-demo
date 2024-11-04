import React from "react";
import Contact from "./Contact.jsx";

function Footer() {
  return (
    <footer>
      <div id="contact">
          <div id="location">
            <h4>Contact</h4>
            <p>
              123 Main St, Suite 456 <br />
              Your City, ST 00000
            </p>
            <p>
              Phone: (555) 555-5555
              <br />
              Email: <a href="mailto:name@business.com">name@business.com</a>
            </p>
          </div>

          <div id="hours">
            <h4>Hours</h4>
            <ul>
              <li>Monday - Friday: 10:00am - 5:30pm</li>
              <li>Saturday, Sunday: Closed</li>
            </ul>
          </div>

          <Contact />
        </div>
    </footer>
  );
}

export default Footer;
