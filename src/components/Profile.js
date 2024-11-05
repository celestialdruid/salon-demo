class Profile extends HTMLElement {
    constructor() {
      super()
      this.innerHTML = `
      <div id="profile">
          <div>
            <h1>Meet Your Stylist</h1>
            <p id="bio">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus mollitia quia voluptates doloribus quae distinctio,
              culpa ad ut, iure hic impedit quaerat officia voluptatibus dicta
              illum, animi obcaecati minima tenetur?
            </p>
          </div>

          <img
            id="profile-photo"
            src="images/jabari-timothy-1jWo7CtrSiw-unsplash.jpg"
          />
        </div>
      `;
    }
  }
  
  customElements.define("profile-hero", Profile);