// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";



// export default function Comments() {
//     const [people, setPeople] = useState([]);




//     return (
//       // <>
//       //     <h1>Community</h1>
//       //     <div className="container">

//       //     </div>
//       // </>

//       <section className="comments-head py-3">
//         <div className="container grid">
//           <div>
//             <h1 className="xl">Earthling Community</h1>
//             <p className="lead">
//               Leave a comment below letting use know how you made a difference
//               using the RECYCLE PLUS + platform.
//             </p>
//           </div>
//         </div>

//         <div className="comments-main my-4">
//           <div className="card">
//             <h2 className="mono">Upcoming Events</h2>
//             <p>
//               August 7th 2021: Pick It Up! - Volunteers are encouraged to pick
//               up at least one piece of trash and recycle it if possible!
//               <br></br>
//               March 22nd 2022: Habitat for Humanity - Volunteers will gather to
//               remodel some houses for those in need.
//               <br></br>
//               April 20th 2022: Earth Day - National Earth Day! Show how much you
//               love your planet!
//               <br></br>
//             </p>

//             <div className="comment comment-success text-center">
//               <div className="bi-recycle">
//                 Let Us Know How You GET YOUR RECYCLE ON!!
//               </div>
//               <i className="bi-recycle"></i>

//               <form action="/action_page.php" className="text-center">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Name"
//                 ></input>
//                 <br></br>

//                 <input
//                   type="text"
//                   id="comment"
//                   name="comment"
//                   placeholder="Comment"
//                 ></input>
//                 <br></br>
//                 <br></br>
//                 <a href="#" className="btn btn-primary">
//                   Submit Comment
//                 </a>
//               </form>

//               <h3 className="mono">Comments</h3>

//               <pre>
//                 <code>
//                   BATMAN: Best place to look up recycling centers anywhere even
//                   for Gotham City!
//                 </code>
//               </pre>

//               <pre>
//                 <code>POISON IVY: Nature always wins.</code>
//               </pre>

//               <pre>
//                 <code>HARLEY QUINN: Puddin! Get Your Recycle On!</code>
//               </pre>
//             </div>
//           </div>
//         </div>
//       </section>
//     );


// };

/*** */


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/api/Comments")
      .then((res) => res.json())
      .then((comments) => setComments(comments))
      .catch((err) => console.error(err));
  }, []);

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

          <div className="comment comment-success text-center">
            <div className="bi-recycle">
              Let Us Know How You GET YOUR RECYCLE ON!!
            </div>
            <i className="bi-recycle"></i>

            <form action="/action_page.php" className="text-center">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              ></input>
              <br></br>

              <input
                type="text"
                id="comment"
                name="comment"
                placeholder="Comment"
              ></input>
              <br></br>
              <br></br>
              <a href="#" className="btn btn-primary">
                Submit Comment
              </a>
            </form>

            <h3 className="mono">Comments</h3>

            <div className="container">
              <div className="row justify-content-around">
                {comments.map((comments) => (
                  <div
                    key={comments.id}
                    className="card my-3"
                    style={{ width: "24rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{comments.name}</h5>
                      <h6 className="card-subtitle mb-2">
                        {comments.content}
                      </h6>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );


};