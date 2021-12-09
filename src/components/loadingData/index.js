import React from "react";

export default ({ img }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem 1rem",
      color:"#333d29"
    }}
  >
    <h5>Use the form below to add a task</h5>
    <img
      style={{
        filter: "grayscale(100%)",
        marginTop: "30px",
        width: "220px",
        minWidth: "50px",
      }}
      src={img}
      alt="Loading Data"
    />
  </div>
);
