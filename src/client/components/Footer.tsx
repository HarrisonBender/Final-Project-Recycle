import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (

<>
        <div className="footer container grid grid-3">
            <div>
                <h1>RECYCLE PLUS +
                </h1>
                <p>Copyright &copy; 2021</p>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="comments.html">Comments</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="#"><i className="bi-facebook"></i></a>
                <a href="#"><i className="bi-instagram"></i></a>
                <a href="#"><i className="bi-twitter"></i></a>
            </div>
        </div>
</>
  )};