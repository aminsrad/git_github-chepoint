import React from "react";
import { Navbar } from "./Navbar";
import ImagesCarousel from "./ImagesCarousel";
import Footer from "./Footer";
import EventAnimation from "./EventAnimation";
import Footercomp from "./Footercomp";
import NavbarLatest from "./NavbarLatest";
import ImagesCarouselPartenaire from "./ImagesCarouselPartenaire";

function Accueil() {
  const h2Styles = {
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    margin: "0",
    padding: "0",
    fontSize: "30px",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: "400",
    color: "#219ed9",
    lineHeight: "1",
  };
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarLatest />
      <ImagesCarousel />

      <div style={{ display: "flex", paddingBottom: "1px" }}>
        <div style={{ width: "60%", paddingRight: "1px" }}>
          <EventAnimation />
        </div>
        <div>
          <div style={{ height: "40%", paddingTop: "30px" }}>
            <h2 style={h2Styles}>Nos Partenaires</h2>
          </div>
          <div style={{ height: "80%" }}>
            <ImagesCarouselPartenaire />
          </div>
        </div>
      </div>

      <Footercomp />
      <Footer />
    </div>
  );
}

export default Accueil;
