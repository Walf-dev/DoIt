import React from "react";

export default ({ img }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem 1rem",
    }}
  >
    <h1
      style={{
        margin: "1rem 0",
        color:"#333d29",
        letterSpacing: "0.4em",
      }}
    >
      All Done!
    </h1>
    <img
      style={{
        filter: "grayscale(100%)",
        width: "100%",
        maxWidth: "250px",
      }}
      src={img}
      alt="All Complete!"
    />
  </div>
);
