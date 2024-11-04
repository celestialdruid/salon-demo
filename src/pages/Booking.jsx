import React from "react";
import Policies from "../components/Policies";

function Booking() {
  return (
    <>
      <h1>Book an Appointment</h1>
      <h2>We accept walk-ins!</h2>

      <center><a href="/"><button className="book-button">Book Here</button></a></center>
      <br />
      <hr />
      <Policies />
    </>
  );
}

export default Booking;
