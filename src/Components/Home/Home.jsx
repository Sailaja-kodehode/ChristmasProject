import React from "react";
import "./home.css";
import "../../index.css";
import Data from "./Data";
import Image from "../Gallery/img16.jpg";
function Home() {
  return (
    <div className="home_section" id="home">
      <div className="home_container">
        <div className="home_content.grid">
          <div>
            <img className="home_image" src={Image} alt="christmas pic" />
          </div>
          <Data />
        </div>
      </div>
    </div>
  );
}
export default Home;
