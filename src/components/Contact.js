class Contact extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <div id="contact-form">
      <h4>Send a Message</h4>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
        />
        <br />
        <label>Your Message: </label>
        <br />
        <textarea
          type="text"
          name="message"
        />
        <br />
        <button id="contact-submit" type="submit">Submit</button>
      </form>
    </div>
    `;
  }
}

customElements.define("contact-form", Contact);
