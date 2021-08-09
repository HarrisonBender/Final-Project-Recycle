import React, { useEffect, useState } from "react";
import { Dropdown } from "bootstrap";

// const SearchBox = ({ placeholder }) => {
const SearchBox = () => {
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = () => {
    fetch("/api/materials")
      .then((res) => res.json())
      .then((material) => setMaterial(material))
      .catch((err) => console.error(err));
  };

  return (
      <>
      <div className="searchbox-form card text-center">
        <h2 className="mono">What and Where To Recycle!</h2>
        <br></br>

        <div className="search">
          <div className="searchInputs">
            {/* <input type="text" placeholder={placeholder}> */}

            <br></br>

            <div className="dropdown">
              <button className="dropbtn">Dropdown</button>
              <div className="dropdown-content">
                <a href="/locationsPlastic">Plastics</a>
                <a href="#">Mixed Paper</a>
                <a href="#">Electronics</a>
              </div>
            </div>

            <br></br>
            <button type="submit" className="btn btn-primary" value="Recycle It!">
              Recycle It!
          </button>
          </div>
          </div>
          </div>
      </>
    );
  };

export default SearchBox;



{/* 
                <label htmlFor="materials">Choose a Material to Recycle:</label>
                <select name="materials" id="materials">
                  <option value="plastic1" >Plastics 1 + 2</option>
                  <option value="plastic2">Plastics 3 - 7</option>
                  <option value="glass">Glass</option>
                  <option value="aluminum">Aluminium Cans</option>
                  <option value="scrap">Scrap Metal</option>
                  <option value="batteries">Batteries</option>
                  <option value="electronics">Electronics</option>
                  <option value="paper">Mixed Papers</option>
                </select>
              </form> */}
          //   </div>
          //   <div className="dataResult"></div>
          // </div> */}
