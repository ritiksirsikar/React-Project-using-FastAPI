import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <a href="http://localhost:3000">Home</a>
        </li>
        <li>News</li>
        <li>Contact</li>
        <li>About</li>
        <li>{/* <input type="text" placeholder="Search.."></input> */}</li>
      </ul>
    </>
  );
}

export default Navbar;
