import React from "react";
import { Recycle, Trash, EmojiSmile } from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <div className="container grid space-between">
        <div className="searchbox-form card text-center">
          <h2 className="mono">What and Where To Recycle!</h2>
          <br></br>
          <form name="searchform" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Material"
              required
            ></input>
            <br></br>
            <br></br>
            <input
              type="text"
              name="company"
              placeholder="Zip Code"
              required
            ></input>
            <br></br>
            <br></br>
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
          <div className="container mz">
            <h1 className="md stats-heading text-center my-3 py-5">
              Recycle & Reuse
            </h1>

            <div className="grid grid-3 text-center ß">
              <div>
                <Trash color="green" size={50} />
                <p>How Many Pieces Of Waste Recycled?</p>
                <h3 className="text-dark mono">22,454,516 Pieces</h3>
              </div>
              <div>
                <Recycle color="green" size={50} />
                <p>How Many Recycle Centers In Alabama?</p>
                <h3 className="text-dark mono">205 Across The State</h3>
              </div>
              <div>
                <EmojiSmile color="green" size={50} />
                <p>
                  Come Be Part Of This Community Of Earthlings Doing Everything
                  To Save The Planet!
                </p>
                <h3 className="text-dark mono">1,232,124 Earthlings</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
