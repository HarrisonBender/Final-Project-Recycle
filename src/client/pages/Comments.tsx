import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import Compose from "../components/Compose";
import { Recycle } from "react-bootstrap-icons";
import ContactForm from "../components/ContactForm";

const Home: React.FC<IHome> = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    fetch("/api/Comments")
      .then((res) => res.json())
      .then((comments) => setComments(comments))
      .catch((err) => console.error(err));
  }

  return (
    <section className="comments-head py-3">
      <div className="container grid">
        <div>
          <h1 className="xl">Earthling Community</h1>
          <p className="lead">
            Leave a comment below letting use know how you made a difference
            using the RECYCLE PLUS + platform.
          </p>
        </div>
      </div>

      <div className="comments-main my-4">
        <div className="card">
          <h2 className="mono">Upcoming Events</h2>
          <p>
            August 7th 2021: Pick It Up! - Volunteers are encouraged to pick up
            at least one piece of trash and recycle it if possible!
            <br></br>
            March 22nd 2022: Habitat for Humanity - Volunteers will gather to
            remodel some houses for those in need.
            <br></br>
            April 20th 2022: Earth Day - National Earth Day! Show how much you
            love your planet!
            <br></br>
          </p>
        </div>

        {/* <div className="card">
          <ContactForm />
        </div> */}

        <Link to={`/`} className="card-link">
          <ContactForm />
        </Link>

        <div className="card">
          <div className="comment comment-success text-center">
            <Recycle color="green" size={50} />
            <div className="bi-recycle">
              Let Us Know How You GET YOUR RECYCLE ON!!
            </div>

            <div>
              <Compose fetchComments={fetchComments} />
            </div>

            <div className="container">
              <h3 className="mono">Earthling Community</h3>
              <div className="row justify-content-center align-items-center">
                {comments.map((comment) => (
                  <CommentCard key={comment.id} comment={comment} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface IHome {}

export default Home;
