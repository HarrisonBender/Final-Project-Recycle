import React from "react";

export default function Home() {
  return (

    <>
      <h1>Home</h1>
      <div className="container-fluid">
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0332481817454!2d-86.77736698470999!3d33.526521180752205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891a56bf5673d5%3A0xf9e1c56e97f4577d!2sBirmingham%20Recycling-Recovery!5e0!3m2!1sen!2sus!4v1628182626087!5m2!1sen!2sus" frameBorder="0"
            allowFullScreen></iframe>
        </div>
      </div>


      <section className="stats">
        <div className="container mz">
            <h1 className="md stats-heading text-center my-1 py-3">
                Recycle & Reuse
            </h1>

            <div className="grid grid-3 text-center ß">
                <div>
                    <i className="bi-trash" ></i>
                    <p>How Many Pieces Of Waste Recycled?</p>
                    <h3 className="text-dark mono">22,454,516 Pieces</h3>
                </div>
                <div>
                    <i className="bi-recycle" ></i>
                    <p>How Many Recycle Centers In Alabama?</p>
                    <h3 className="text-dark mono">205 Across The State</h3>
                </div>
                <div>
                    <i className="bi-emoji-smile" ></i>
                    <p>Come Be Part Of This Community Of Earthlings Doing Everything To Save The Planet!</p>
                    <h3 className="text-dark mono">1,232,124 Earthlings</h3>
                </div>
            </div>
        </div>
    </section>


    </>



  );
}


