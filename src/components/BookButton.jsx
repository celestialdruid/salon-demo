import React from "react";
import { Link } from "react-router-dom";

function BookButton() {
  return (
    <Link to="booking">
      <button className="book-button">Book Now</button>
    </Link>
  );
}

export default BookButton;
