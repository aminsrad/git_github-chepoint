import React, { useState } from "react";
import NavbarLatest from "./NavbarLatest";
import Footercomp from "./Footercomp";
import Footer from "./Footer";
import phone from "../images/icons8-phone-32.png";
import mail from "../images/icons8-mail-24.png";
import location from "../images/icons8-location-24.png";
import fax from "../images/icons8-fax-32.png";
import { useDispatch } from "react-redux";
import { addContactus } from "../redux/actions/contactus";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>;

<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.2/mdb.min.js"
></script>;
const Contact = () => {
  const leftColumnStyle = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    fontFamily: "Poppins, sans-serif",
    WebkitFontSmoothing: "antialiased",
    color: "#000",
    lineHeight: "20px",
    letterSpacing: "0.8px",
    fontSize: "0.875rem",
    boxSizing: "inherit",
    position: "relative",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    float: "left",
    width: "50%",
  };
  const contactRichStyle = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    fontFamily: "Poppins, sans-serif",
    WebkitFontSmoothing: "antialiased",
    lineHeight: "20px",
    letterSpacing: "0.8px",
    fontSize: "0.875rem",
    boxSizing: "inherit",
    backgroundColor: "#fff",
    color: "#1a1a1a",
    marginBottom: "2rem",
    wordWrap: "break-word",
    border: "1px solid #eee",
    padding: "1rem",
    borderRadius: "0px",
  };

  const blockStyle = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    fontFamily: "Poppins, sans-serif",
    WebkitFontSmoothing: "antialiased",
    lineHeight: "20px",
    letterSpacing: "0.8px",
    fontSize: "0.875rem",
    color: "#1a1a1a",
    wordWrap: "break-word",
    boxSizing: "inherit",
    height: "auto",
    overflow: "hidden",
  };
  const iconStyle = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    fontFamily: "Poppins, sans-serif",
    WebkitFontSmoothing: "antialiased",
    lineHeight: "20px",
    letterSpacing: "0.8px",
    fontSize: "0.875rem",
    color: "#1a1a1a",
    wordWrap: "break-word",
    boxSizing: "inherit",
    float: "left",
    width: "2.5rem",
  };

  const iStyle = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    color: "#1a1a1a",
    boxSizing: "inherit",
    fontFamily: "Material Icons",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    display: "inline-block",
    verticalAlign: "middle",
    width: "1em",
    height: "1em",
    lineHeight: "1",
    textTransform: "none",
    letterSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "nowrap",
    direction: "ltr",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
    fontFeatureSettings: '"liga"',
  };

  const dataStyle = {
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
    fontFamily: "Poppins, sans-serif",
    WebkitFontSmoothing: "antialiased",
    lineHeight: "20px",
    letterSpacing: "0.8px",
    wordWrap: "break-word",
    boxSizing: "inherit",
    color: "#232323",
    fontSize: "0.875rem",
    width: "auto",
    overflow: "hidden",
  };
  const listStyles = {
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitTextSizeAdjust: "100%",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "14px",
    lineHeight: "1.42857143",
    color: "#333",
    boxSizing: "border-box",
    marginTop: "0",
    padding: "8px 15px",
    marginBottom: "20px",
    listStyle: "none",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
  };
  const textStyles = {
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitTextSizeAdjust: "100%",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "14px",
    lineHeight: "1.42857143",
    listStyle: "none",
    boxSizing: "border-box",
    display: "inline",
    color: "#999",
  };
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const dispatch = useDispatch();
  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage(null);
  };
  const add = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Message", Message);
    const contactobj = { Name, Email, Message };

    dispatch(addContactus(contactobj));

    clearForm();
    alert("Merci");
  };

  return (
    <div
      style={{
        paddingTop: "120px",
      }}
    >
      <NavbarLatest />
      <div>
        <ol style={listStyles}>
          <li style={{ display: "inline" }}>
            <a href="/">Accueil</a>
          </li>
          <li style={textStyles}> / Contacts</li>
        </ol>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
          }}
        >
          <div style={leftColumnStyle}>
            <div style={contactRichStyle}>
              <h4>SIÈGE SOCIAL TUNISIE</h4>
              <div style={blockStyle}>
                <div style={iconStyle}>
                  <i style={iStyle}>
                    <img src={location} alt="location" />
                  </i>
                </div>
                <div style={dataStyle}>
                  IMM. MAK CROWN, 3ÈME ÉTAGE
                  <br />
                  RUE DU LAC TANGANYIKA LES BERGES DU LAC
                  <br />
                  1053 TUNIS
                  <br />
                  TUNISIE
                </div>
              </div>
              <hr />
              <div style={blockStyle}>
                <div style={iconStyle}>
                  <i style={iStyle}>
                    <img src={phone} alt="phone" />
                  </i>
                </div>
                <div style={dataStyle}>
                  Appelez-nous :<br />
                  +216 71 966 986
                </div>
              </div>
              <hr />
              <div style={blockStyle}>
                <div style={iconStyle}>
                  <i style={iStyle}>
                    <img src={fax} alt="fax" />
                  </i>
                </div>
                <div style={dataStyle}>
                  Fax :<br />
                  +216 71 963 340
                </div>
              </div>
              <hr />
              <div style={blockStyle}>
                <div style={iconStyle}>
                  <i style={iStyle}>
                    <img src={mail} alt="mail" />
                  </i>
                </div>
                <div style={dataStyle}>
                  Envoyez-nous un e-mail :<br />
                  <a href="mailto:contacts@sacemindustries.com">
                    contacts@sacemindustries.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={leftColumnStyle}>
            <div style={contactRichStyle}>
              <h4>USINE TUNISIE</h4>
              <div style={blockStyle}>
                <div style={iconStyle}>
                  <i style={iStyle}>
                    <img src={location} alt="location" />
                  </i>
                </div>
                <div style={dataStyle}>
                  IMM. MAK CROWN, 3ÈME ÉTAGE
                  <br />
                  RUE DU LAC TANGANYIKA LES BERGES DU LAC
                  <br />
                  1053 TUNIS
                  <br />
                  TUNISIE
                </div>
              </div>
              <hr />
              <div style={blockStyle}>
                <div style={iconStyle}>
                  <i style={iStyle}>
                    <img src={phone} alt="phone" />
                  </i>
                </div>
                <div style={dataStyle}>
                  Appelez-nous :<br />
                  +216 71 966 986
                </div>
              </div>
              <hr />
              <div style={blockStyle}>
                <div style={iconStyle}>
                  <i style={iStyle}>
                    <img src={fax} alt="fax" />
                  </i>
                </div>
                <div style={dataStyle}>
                  Fax :<br />
                  +216 71 963 340
                </div>
              </div>
              <hr />
              <div style={blockStyle}>
                <div style={iconStyle}>
                  <i style={iStyle}>
                    <img src={mail} alt="mail" />
                  </i>
                </div>
                <div style={dataStyle}>
                  Envoyez-nous un e-mail :<br />
                  <a href="mailto:contacts@sacemindustries.com">
                    contacts@sacemindustries.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form class="text-center border border-light p-5" action="#!">
            <p class="h4 mb-4">Contact us</p>
            <input
              type="text"
              id="defaultContactFormName"
              class="form-control mb-4"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={Name}
              required
            />
            <input
              type="text"
              id="defaultContactFormEmail"
              class="form-control mb-4"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              required
            />
            <div class="form-group">
              <textarea
                class="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="3"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={Message}
              ></textarea>
            </div>
            <button type="button" onClick={add} class="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footercomp />
      <Footer />
    </div>
  );
};

export default Contact;
