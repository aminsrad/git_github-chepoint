import React from "react";
import backimg1 from "../images/back.jpg";
import backimg from "../images/fond-bleu-degrade.jpg";
import logo from "../images/logo.png";
import phone from "../images/icons8-phone-32.png";
import mail from "../images/icons8-mail-24.png";
import home from "../images/icons8-home-24.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";

const Footercomp = () => {
  const footerStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    background: `url(${backimg}) no-repeat center center`,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const block1Styles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  };

  const wrapStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    margin: "auto",
    maxWidth: "100%",
    padding: "0px 15px",
    width: "992px",
  };

  const leftStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    float: "left",
    paddingTop: "10px",
    paddingLeft: "0px",
    paddingRight: "100px",
    width: "35%",
  };

  const logoStyles = {
    fontFamily: "GTWalsheimProTrial !important",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    color: "#FFFFFF",
    fontSize: "18px",
    marginBottom: "30px",
  };

  const imgStyles = {
    fontFamily: "GTWalsheimProTrial !important",
    color: "#fff",
    fontSize: "18px",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    border: "0px",
    verticalAlign: "middle",
    marginBottom: "0px",
    maxWidth: "60%",
    marginLeft: "9px",
  };

  const decStyles = {
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    fontSize: "16px",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: "400",
    color: "#FFFFFF",
    lineHeight: "40px",
  };

  const p1Styles = {
    fontSize: "14px",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: "400",
    color: "#FFFFFF",
    lineHeight: "40px",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    margin: "0",
    padding: "0",
    paddingLeft: "40px",
    backgroundPosition: "left 8px !important",
    marginBottom: "5px",
    background: `url(${mail}) no-repeat left center`,
  };
  const p2Styles = {
    fontSize: "14px",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: "400",
    color: "#FFFFFF",
    lineHeight: "30px",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    margin: "0",
    padding: "0",
    paddingLeft: "20px",
    backgroundPosition: "left 8px !important",
    marginBottom: "5px",
    background: `url(${phone}) no-repeat left center`,
  };
  const p3Styles = {
    fontSize: "14px",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: "400",
    color: "#FFFFFF",
    lineHeight: "20px",
    outline: "none",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    margin: "0",
    padding: "0",
    paddingLeft: "40px",
    backgroundPosition: "left 8px !important",
    marginBottom: "5px",
    background: `url(${home}) no-repeat left center`,
  };

  const linkStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#FFFFFF",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    paddingTop: "21px",
    paddingBottom: "10px",
  };

  const aStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    color: "#a3a3a3",
    outline: "none",
    textDecoration: "none",
  };

  const aImgStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#235aa7",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    border: "0px",
    verticalAlign: "middle",
    maxWidth: "60%",
    marginRight: "17px",
    marginLeft: "0",
    marginBottom: "0",
  };

  const rightStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    float: "right",
    paddingTop: "50px",
    paddingLeft: "300px",
    width: "65%",
    display: "flex",
    justifyContent: "center",
  };

  const itemStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    float: "left",
    marginLeft: "0px",
    paddingRight: "80px",
  };

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
    color: "#FFFFFF",
    paddingBottom: "30px",
    lineHeight: "1",
  };

  const rightdecStyles = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial !important",
    color: "#000000",
    outline: "none",
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  };

  const rightdecAStyles = {
    boxSizing: "border-box",
    padding: "0",
    margin: "0",
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    outline: "none",
    textDecoration: "none",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: "400",
    color: "#A0A0A0",
    lineHeight: "30px",
    display: "block",
    transition: "all 0.4s",
    fontSize: "18px",
  };

  return (
    <div style={footerStyles}>
      <div style={block1Styles}>
        <div style={wrapStyles}>
          <div style={leftStyles}>
            <div style={logoStyles}>
              <img style={imgStyles} src={logo} alt="" /> <br />
              <span>SACEM INDUSTRIES (TUNISIA)</span>
            </div>
            <div style={decStyles}>
              <p style={p1Styles}>Email：contacts@sacemindustries.com</p>
              <p style={p2Styles}>Tel：+ 216 71 966 986 </p>
              <p style={p3Styles}>
                <span>
                  Imm. Mak Crown, 3ème étage, Rue du Lac Tanganyika Les Berges
                  du Lac 1053
                </span>
                <br />
                <span>Tunis, Tunisie</span>
              </p>
            </div>
            <div style={linkStyles}>
              <a
                style={aStyles}
                href="https://www.facebook.com/sacemindustries/?locale=fr_FR"
                target="_blank"
              >
                <img style={aImgStyles} src={facebook} alt="" />
              </a>

              <a
                href="https://www.linkedin.com/showcase/sacem-industries/"
                target="_blank"
              >
                <img style={aImgStyles} src={linkedin} alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCUqlR9rgOYsJJ0wgFx3IZ3Q"
                target="_blank"
              >
                <img style={aImgStyles} src={youtube} alt="" />
              </a>
            </div>
          </div>
          <div style={rightStyles}>
            <div style={itemStyles}>
              <h2 style={h2Styles}>Products</h2>
              <div style={rightdecStyles}>
                <a style={rightdecAStyles}>Transformers</a>
                <a style={rightdecAStyles}>Substation</a>
                <a style={rightdecAStyles}>Batteries de condensateur</a>
                <a style={rightdecAStyles}>Accessories</a>
              </div>
            </div>
            <div style={itemStyles}>
              <h2 style={h2Styles}>Contact</h2>
              <div style={rightdecStyles}>
                <a style={rightdecAStyles} href="/Contact">
                  TUNISIE
                </a>
                <a style={rightdecAStyles} href="/Contact">
                  AFRIQUE
                </a>
                <a style={rightdecAStyles} href="/Contact">
                  LIBYA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footercomp;
