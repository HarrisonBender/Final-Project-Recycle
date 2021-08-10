import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <Link to='/'>
          <h1 className="logo">RECYCLE +</h1>
        </Link>
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
