import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //         fetch("https://ghibliapi.herokuapp.com/people")
  //             .then(res => res.json())
  //             .then(people => setPeople(people))
  //             .catch(err => console.error(err));
  //     }, []);

  return (
    <>
      <h1 className="mb-5">About</h1>
      <div className="container d-flex text-white">
        <h3>Hey Birmingham!</h3>
        <p>
          This helpful geographical website was created by Innovate Birmingham's
          Cohort 14 Group 3 for not only a final project, but to also help
          improve the city we love. The main focus of this website was to
          promote conservation efforts in whatever shape, or form you see fit.
          We hope this will lead to new projects and developments in our city
          and surronding neighborhoods that are focused on the planet, our city,
          and our community.
          <br />          <br />

          If you know any information that you feel should be available on this
          website, please use the comment section, or dm us directly on
          Facebook, or LinkedIn.
        </p>
      </div>
    </>
  );
}
