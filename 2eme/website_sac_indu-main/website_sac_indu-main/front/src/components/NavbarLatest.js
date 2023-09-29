import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logosacem.png";

const NavbarLatest = () => {
  const logoStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    height: "80px",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    float: "left",
    position: "relative",
    zIndex: "4",
  };
  const headerStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    display: "block",
    position: "fixed",
    left: "0px",
    top: "0px",
    zIndex: "9999",
    width: "100%",
    background: "#F5F5F5",
    paddingBottom: "26px",
    transition: "all 0.4s",
  };
  const HeaderscrollStyles = {
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    height: "90px",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    display: "block",
    position: "fixed",
    left: "0px",
    top: "0px",
    zIndex: "9999",
    width: "100%",
    paddingBottom: "26px",
    transition: "all 0.4s",
    background: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "50px 50px 50px rgba(8, 8, 8, 0.03)",
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  const mainStyles = {
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    margin: "auto",
    maxWidth: "100%",
    padding: "0px 15px",
    paddingLeft: "134px",
    paddingRight: "156px",
    position: "sticky",
    top: 0,
  };
  const navStyles = {
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    paddingTop: "5px",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    width: "100%",
    textAlign: "center",
    top: "0px",
    left: "0px",
    fontSize: "0",
  };

  const h2Styles = {
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    listStyle: "none",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    margin: "0",
    padding: "0",
  };
  const ulStyles = {
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    textAlign: "center",
    fontSize: "0",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    margin: "0",
    padding: "0",
    display: "inline-block",
  };
  const liStyles = {
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    fontSize: "0",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    padding: "0",
    listStyle: "none",
    display: "inline-block",
    paddingTop: "39px",
    paddingBottom: "20px",
    transition: "all 0.4s",
    margin: "0px 20px",
  };
  const linkStyles = {
    listStyle: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    outline: "none",
    textDecoration: "none",
    fontSize: "18px",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: "400",
    display: "block",
    lineHeight: "1",
    transition: "all 0.4s",
    color: "#333",
  };

  return (
    <div style={color ? HeaderscrollStyles : headerStyles}>
      <div style={mainStyles}>
        <div style={logoStyles}>
          <a href="/">
            <img src={logo} alt="sacem" />
          </a>
        </div>
        <div style={navStyles}>
          <ul style={ulStyles}>
            <li style={liStyles}>
              <h2 style={h2Styles}>
                <Link style={linkStyles} to="/">
                  Accueil
                </Link>
              </h2>
            </li>
            <li style={liStyles}>
              <h2 style={h2Styles}>
                <Link style={linkStyles} to="/histoire">
                  Histoire
                </Link>
              </h2>
            </li>
            <li style={liStyles}>
              <h2 style={h2Styles}>
                <Link style={linkStyles} to="/listactualite">
                  Actualité
                </Link>
              </h2>
            </li>
            <li style={liStyles}>
              <h2 style={h2Styles}>
                <Link style={linkStyles} to="/listproduits">
                  Produits
                </Link>
              </h2>
            </li>
            <li style={liStyles}>
              <h2 style={h2Styles}>
                <Link style={linkStyles} to="/login">
                  Login
                </Link>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarLatest;
