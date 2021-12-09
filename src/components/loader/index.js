import React from "react";
import "./style.css";
export default function Loader() {
  return (
    <>
      <div class="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
      {/*<div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign:"center",
          width: "100%",
          height: "100vh",
          padding: "3rem",
        }}
      >
        <span
          style={{
            filter: "grayscale(100%)",
            width: "100%",
            maxWidth: "200px",
          }}
        >
          Loading...
        </span>
        </div>*/}
    </>
  );
}
