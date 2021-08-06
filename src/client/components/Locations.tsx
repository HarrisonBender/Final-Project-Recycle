import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/api/recycleCenters")
      .then((res) => res.json())
      .then((locations) => setLocations(locations))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Locations</h1>

      <div className="container-fluid">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0332481817454!2d-86.77736698470999!3d33.526521180752205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891a56bf5673d5%3A0xf9e1c56e97f4577d!2sBirmingham%20Recycling-Recovery!5e0!3m2!1sen!2sus!4v1628182626087!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around">
          {locations.map((locations) => (
            <div
              key={locations.id}
              className="card my-3"
              style={{ width: "24rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">{locations.name}</h5>
                <h6 className="card-subtitle mb-2">
                  Address: {locations.address}
                </h6>
                <h6 className="card-subtitle mb-2">Hours: {locations.hours}</h6>
                <h6 className="card-subtitle mb-2">
                  Materials Accepted: {locations.materials}
                </h6>
                <h6 className="card-subtitle mb-2">
                  County: {locations.countyid}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}