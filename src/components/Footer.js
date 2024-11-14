class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer>
      <div id="contact">
          <div id="location">
            <h4>Contact</h4>
            <p>
              123 Main St, Suite 456 <br />
              Your City, ST 00000
            </p>
            <p>
              Phone: <a href="tel:+5555555555">(555) 555-5555</a> 
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

          <div id="contact-form">
            <h4>Send a Message</h4>
            <form>
              <label>Name: </label>
              <input type="text" name="name" />
              <br />
              <label>Email: </label>
              <input type="email" name="email" />
              <br />
              <label>Your Message: </label>
              <br />
              <textarea type="text" name="message"></textarea>
              <br /><br />
              <button id="contact-submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
    </footer>
    `;
  }
}

customElements.define("site-footer", Footer);
