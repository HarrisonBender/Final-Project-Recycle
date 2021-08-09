import React from "react";

export default function Home() {
  return (
    // <>
    //   <h1>Home</h1>
    //   <section className="stats">
    //     <div className="container mz">
    //         <h1 className="md stats-heading text-center my-1 py-3">
    //             Recycle & Reuse
    //         </h1>

    //         <div className="grid grid-3 text-center ß">
    //             <div>
    //                 <i className="bi-trash" ></i>
    //                 <p>How Many Pieces Of Waste Recycled?</p>
    //                 <h3 className="text-dark mono">22,454,516 Pieces</h3>
    //             </div>
    //             <div>
    //                 <i className="bi-recycle" ></i>
    //                 <p>How Many Recycle Centers In Alabama?</p>
    //                 <h3 className="text-dark mono">205 Across The State</h3>
    //             </div>
    //             <div>
    //                 <i className="bi-emoji-smile" ></i>
    //                 <p>Come Be Part Of This Community Of Earthlings Doing Everything To Save The Planet!</p>
    //                 <h3 className="text-dark mono">1,232,124 Earthlings</h3>
    //             </div>
    //         </div>
    //     </div>
    // </section>

    // </>
    
    <section className="searchbox grid">
      <div className="container space-between">
        <div className="searchbox-form card text-center">
          <h2 className="mono">What and Where To Recycle!</h2>
          <form name="searchform" method="POST">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Material"
                required
              ></input>
            </div>
            <div className="form-control">
              <input
                type="text"
                name="company"
                placeholder="Zip Code"
                required
              ></input>
            </div>
            <input
              type="submit"
              value="Recycle It!"
              className="btn btn-primary"
            ></input>
          </form>
        </div>
        <div className="searchbox-text">
          <h1>Make The World A Better Place!</h1>
          <p>
            With us you will be able to figure out where to take all your
            materials! Don't know if you can recycle what you have? Enter your
            material and location and we can let you know if the materials are
            recycable and what to do next!
          </p>
          {/* <a href="/locations" className="btn btn-outline">
            Read More
          </a> */}
        </div>
      </div>

      <div className="container mz">
        <h1 className="md stats-heading text-center my-3 py-5">
          Recycle & Reuse
        </h1>

        <div className="grid grid-3 text-center ß">
          <div>
            {/* <i className="bi-trash" style="font-size: 2rem; color:green"></i> */}
            <p>How Many Pieces Of Waste Recycled?</p>
            <h3 className="text-dark mono">22,454,516 Pieces</h3>
          </div>
          <div>
            {/* <i className="bi-recycle" style="font-size: 2rem; color:green"></i> */}
            <p>How Many Recycle Centers In Alabama?</p>
            <h3 className="text-dark mono">205 Across The State</h3>
          </div>
          <div>
            {/* <i
              className="bi-emoji-smile"
              style="font-size: 2rem; color:green"
            ></i> */}
            <p>
              Come Be Part Of This Community Of Earthlings Doing Everything To
              Save The Planet!
            </p>
            <h3 className="text-dark mono">1,232,124 Earthlings</h3>
          </div>
        </div>
      </div>
    </section>
  );
}


