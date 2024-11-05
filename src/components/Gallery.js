class Gallery extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <div class="gallery-container">
          <img
            class="gallery-img"
            src="images/loc-retwist1.jpg"
            alt="retwist"
          />
          <img
            class="gallery-img"
            src="images/loc-style1.jpg"
            alt="mens rewitst style"
          />
          <img
            class="gallery-img"
            src="images/loc-style2.jpg"
            alt="mens retwist"
          />
          <img
            class="gallery-img"
            src="images/loc-color.jpg"
            alt="loc style and color"
          />
        </div>
    `;
  }
}

customElements.define("photo-gallery", Gallery);