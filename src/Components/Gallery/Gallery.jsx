import React from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";

import "./gallery.css";
function Gallery() {
  let data = [
    {
      id: 1,
      imgScr: img1,
    },
    {
      id: 2,
      imgScr: img2,
    },
    {
      id: 3,
      imgScr: img3,
    },
    {
      id: 4,
      imgScr: img4,
    },
    {
      id: 5,
      imgScr: img5,
    },
    {
      id: 6,
      imgScr: img6,
    },
    {
      id: 7,
      imgScr: img7,
    },
    {
      id: 8,
      imgScr: img8,
    },
    {
      id: 9,
      imgScr: img9,
    },
  ];

  return (
    <div className="gallery" id="gallery">
      <h1 className="typing">Bergen in Christmas </h1>

      {/* {data.map((item, index) => {
        return (
          <div className="img" key={index}>
            <img src={item.imgScr} styles={{ width: "100%" }} />
          </div>
        );
      })} */}
    </div>
  );
}

export default Gallery;
