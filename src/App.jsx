import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
      <h1 id="title">Locs & Looks</h1>
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="booking">
            <button>Booking</button>
          </Link>
          <Link to="products">
            <button>Products</button>
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
