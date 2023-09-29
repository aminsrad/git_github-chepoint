import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        marginBottom: "20px",
        paddingTop: "2px",
        borderTop: "thin solid",
        borderColor: "#eef2f2",
        color: "#778495",
      }}
    >
      <div>
        <div
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <p>
            Depuis 1966 SACEM Industries est le leader dans la fabrication et la
            commercialisation des transformateurs de distribution électriques.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <p>www.sacemindustries.com © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
