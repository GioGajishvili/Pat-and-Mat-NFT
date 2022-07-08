import React, { useEffect, useState } from "react";
import "./Slider.css";

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "").replace(item.replace("./", ""), index)] =
        r(item);
    });
    return images;
  }

  const callback = () => {
    setIndex((prev) =>
      prev === Object.keys(images).length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    setInterval(callback, 2000);
  }, []);

  const images = importAll(
    require.context("./PhotosNFT", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="slideshow">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={images[index]}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  );
}
