import React from "react";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import BookButton from "../components/BookButton";

function Home() {
  return (
    <>
      <section id="about">  
        <div id="profile">
          <div>
            <h1>Meet Your Stylist</h1>
            <p id="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia quia voluptates doloribus quae distinctio, culpa ad ut, iure hic impedit quaerat officia voluptatibus dicta illum, animi obcaecati minima tenetur?</p>
          </div>
          
          <img id="profile-photo" src="/images/jabari-timothy-1jWo7CtrSiw-unsplash.jpg" />
        </div>
        
      </section>

      <BookButton />

      <section id="gallery">
        <Gallery />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section>
        <Services />
      </section>

      <BookButton />

    </>
  );
}

export default Home;
