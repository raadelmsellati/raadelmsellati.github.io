// src/components/Header.js
import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header>
    <nav>
      <h1>Your Name</h1>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
