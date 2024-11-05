class Header extends HTMLElement {
    constructor() {
      super()
      this.innerHTML = `
      <header>
      <h1 id="title">Locs & Looks</h1>
      <nav>
        <a href="/salon-demo/index.html">
          <button>Home</button>
        </a>
        <a href="/salon-demo/src/pages/Booking.html">
          <button>Booking</button>
        </a>
        <a href="/salon-demo/src/pages/Products.html">
          <button>Products</button>
        </a>
      </nav>
    </header>
      `;
    }
  }
  
  customElements.define("header-element", Header);