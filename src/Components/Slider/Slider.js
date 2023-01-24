import React, { useEffect, useState, useRef } from "react";
import "./Slider.css";
import { URL } from "./urlArray";

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(true);

  const addStylesheetRules = (rule, rule2) => {
    var styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    styleSheet.insertRule(rule, 0);
    styleSheet.insertRule(rule2, 1);
  };

  const In = `
    @-webkit-keyframes In {
      0% { opacity: 0.5;
           color: 'black';
         }
      100% { opacity: 1; color: 'grey'}
    }
  `;

  const Out = `
  @-webkit-keyframes Out {
    0% { opacity: 1; background-color: black; }
    100% { opacity: 0.5; background-color: grey; }
  }
`;

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "").replace(item.replace("./", ""), index)] =
        r(item) + "&" + item.split("./")[1].replace(".png", "");
    });
    return images;
  }

  const callback = () => {
    setIndex((prev) =>
      prev === Object.keys(images).length - 1 ? 0 : prev + 1
    );
  };

  const prevCountRef = useRef();
  useEffect(() => {
    const listener = setInterval(callback, 6000);

    prevCountRef.current = index;
    addStylesheetRules(In, Out);
    return () => clearInterval(listener);
  }, [check]);

  const images = importAll(
    require.context("./PhotosNFT", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="slideshow" style={{ position: "relative" }}>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          bottom: 10,
          left: 0,
          right: 0,
          zIndex: "3",
          height: "auto",
          width: "fit-content",
          position: "absolute",
          display: "flex",
          alignItems: "center",
        }}
      >
        {Object.entries(images).map(([key, value], Index) => (
          <div
            className="circles"
            key={Index}
            style={{
              backgroundColor: index === Index ? "black" : "gray",
              border: "solid white 2px",
              margin: "5px",
              borderRadius: "50%",
              cursor: "pointer",
              opacity: 0.5,
              animation: `${
                index === Index
                  ? "In"
                  : prevCountRef.current === Index
                  ? "Out"
                  : ""
              } ease-in-out ${index === Index ? "0.3s" : "0.3s"} forwards`,
            }}
            onClick={() => {
              setIndex(Index);
              setCheck(!check);
            }}
          />
        ))}
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          objectFit: "cover",
        }}
      >
        <a
          href={URL[images[index].split("&")[1]]}
          style={{ zIndex: 2 }}
          target="_blank"
        >
          <img
            key={images[index]}
            className="img-changing"
            src={images[index].split("&")[0]}
            style={{
              borderRadius: "5%",
              width: "100%",
              height: "auto",
              maxHeight: "500px",
            }}
          />
        </a>
        <img
          key={index + 1}
          src={
            images[
              index === 0 ? Object.keys(images).length - 1 : index - 1
            ].split("&")[0]
          }
          style={{
            borderRadius: "5%",
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            position: "absolute",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
