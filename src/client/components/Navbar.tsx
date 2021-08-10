import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">RECYCLE PLUS +</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/locations">Locations</a>
            </li>
            <li>
              <a href="/comments">Community</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
