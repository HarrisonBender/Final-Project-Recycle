import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //   <p className="display-5">RECYCLE PLUS +</p>
    //     <img
    //       id="logo"
    //       src="https://i.pinimg.com/originals/02/53/d5/0253d54a38dd15d359de5d5cb9bbc941.gif"
    //       alt="recycle-logo"
    //     />
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link to="/" className="nav-link">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/about" className="nav-link">
    //             About Us
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/locations" className="nav-link">
    //             Locations
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/comments" className="nav-link">
    //             Community
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">RECYCLE PLUS +</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/locations">About Us</a>
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