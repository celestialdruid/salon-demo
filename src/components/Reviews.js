class Reviews extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <h1 class="heading">Testimonials</h1>
        <p>Here's what other clients are saying:</p>

        <div class="review-card">
          <img src="https://picsum.photos/200" alt="review-photo" />
          <div class="review-body">
            <h3 class="review-name">- Reviewer Name</h3>
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              doloribus porro minus blanditiis nihil maiores expedita dolores,
              sunt error sapiente voluptatum a consequatur illum aliquid
              necessitatibus quibusdam. Ducimus, natus eveniet." Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Totam expedita
              provident illum, eaque ea inventore? Ducimus quisquam dolorum
              necessitatibus quis eius quidem! Eos possimus placeat labore
              deserunt! Voluptatem, soluta odit?
            </p>
          </div>
        </div>

        <div class="review-card">
          <img src="https://picsum.photos/200" alt="review-photo" />
          <div class="review-body">
            <h3 class="review-name">- Reviewer Name</h3>
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              doloribus porro minus blanditiis nihil maiores expedita dolores,
              sunt error sapiente voluptatum a consequatur illum aliquid
              necessitatibus quibusdam. Ducimus, natus eveniet."
            </p>
          </div>
        </div>

        <div class="review-card">
          <img src="https://picsum.photos/200" alt="review-photo" />
          <div class="review-body">
            <h3 class="review-name">- Reviewer Name</h3>
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              doloribus porro minus blanditiis nihil maiores expedita dolores,
              sunt error sapiente voluptatum a consequatur illum aliquid
              necessitatibus quibusdam. Ducimus, natus eveniet."
            </p>
          </div>
        </div>

        <div class="review-card">
          <img src="https://picsum.photos/200" alt="review-photo" />
          <div class="review-body">
            <h3 class="review-name">- Reviewer Name</h3>
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              doloribus porro minus blanditiis nihil maiores expedita dolores,
              sunt error sapiente voluptatum a consequatur illum aliquid
              necessitatibus quibusdam. Ducimus, natus eveniet."
            </p>
          </div>
        </div>
    `;
  }
}

customElements.define("client-reviews", Reviews);