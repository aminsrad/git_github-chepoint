import React, { useState } from "react";

const Wrapcont = () => {
  const [isHovered1966, setIsHovered1966] = useState(false);
  const [isHovered2007, setIsHovered2007] = useState(false);
  const [isHovered2023, setIsHovered2023] = useState(false);

  const handleMouseEnter1966 = () => {
    if (!isHovered1966) {
      setIsHovered1966(true);
    }
  };
  const handleMouseEnter2007 = () => {
    if (!isHovered2007) {
      setIsHovered2007(true);
    }
  };
  const handleMouseEnter2023 = () => {
    if (!isHovered2023) {
      setIsHovered2023(true);
    }
  };

  const handleMouseLeave1966 = () => {
    if (isHovered1966) {
      setIsHovered1966(false);
    }
  };
  const handleMouseLeave2007 = () => {
    if (isHovered2007) {
      setIsHovered2007(false);
    }
  };
  const handleMouseLeave2023 = () => {
    if (isHovered2023) {
      setIsHovered2023(false);
    }
  };

  const item = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial",
    color: "#000000",
    visibility: "visible",
    outline: "none",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    flex: 1,
    height: "357px",
    background: "#f5f5f5",
    position: "relative",
    cursor: "pointer",
    border: "2px solid #fff",
    transition: "all 0.4s",
  };
  const hoverItemStyle = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial",
    color: "#000000",
    visibility: "visible",
    outline: "none",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    height: "357px",
    position: "relative",
    cursor: "pointer",
    border: "2px solid #fff",
    transition: "all 0.4s",
    flex: 7.5,
    background: "#219ed9",
  };

  //const [ItemStyles, setItemStyles] = useState(item);

  //const ItemStyles = isHovered ? hoverItemStyle : item;

  const year = {
    visibility: "visible",
    cursor: "pointer",
    outline: "none",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    transition: "all 0.4s",
    textAlign: "center",
    paddingTop: "31px",
    fontSize: "24px",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: 400,
    color: "#000000",
    lineHeight: 1,
    opacity: 0.6,
  };
  const yearHovered = {
    visibility: "visible",
    cursor: "pointer",
    outline: "none",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    transition: "all 0.4s",
    textAlign: "center",
    paddingTop: "31px",
    fontSize: "24px",
    fontFamily: "GTWalsheimProTrial",
    fontWeight: 400,
    color: "#000000",
    lineHeight: 1,
    transform: "translate(0%, 50%)",
    opacity: 0,
  };
  //const yearStyles = isHovered ? yearHovered : year;

  const slide = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial",
    color: "#000000",
    visibility: "visible",
    cursor: "pointer",
    outline: "none",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    transition: "all 0.4s",
    paddingTop: "66px",
    paddingLeft: "47px",
    paddingRight: "47px",
    height: "100%",
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "100%",
    opacity: 0,
  };
  const slideHover = {
    fontSize: "1.4rem",
    fontFamily: "GTWalsheimProTrial",
    color: "#000000",
    visibility: "visible",
    cursor: "pointer",
    outline: "none",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    transition: "all 0.4s",
    paddingTop: "66px",
    paddingLeft: "47px",
    paddingRight: "47px",
    height: "100%",
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "100%",
    opacity: 1,
  };
  //const slideStyles = isHovered ? slideHover : slide;

  const time = {
    visibility: "visible",
    cursor: "pointer",
    outline: "none",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    transition: "all 0.4s",
    fontSize: "48px",
    fontFamily: "Brush Script MT, cursive",
    fontWeight: 400,
    color: "#FFFFFF",
  };
  const dec = {
    fontFamily: "cursive",
    visibility: "visible",
    cursor: "pointer",
    outline: "none",
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    transition: "all 0.4s",
    fontSize: "16px",
    fontWeight: "normal",
    color: "#FFFFFF",
    lineHeight: "37px",
    paddingTop: "10px",
  };
  return (
    <div
      style={{
        fontSize: "1.4rem",
        fontFamily: "GTWalsheimProTrial",
        color: "#000000",
        outline: "none",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        WebkitFontSmoothing: "antialiased",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        paddingTop: "78px",
        paddingBottom: "64px",
      }}
    >
      <div
        style={{
          fontSize: "1.4rem",
          fontFamily: "GTWalsheimProTrial",
          color: "#000000",
          outline: "none",
          boxSizing: "border-box",
          WebkitFontSmoothing: "antialiased",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          margin: "auto",
          maxWidth: "100%",
          padding: "0px 15px",
          width: "992px",
        }}
      >
        <div
          style={{
            outline: "none",
            boxSizing: "border-box",
            padding: 0,
            margin: 0,
            WebkitFontSmoothing: "antialiased",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            animationFillMode: "both",
            animationDuration: "1.76s",
            fontSize: "61px",
            fontFamily: "GTWalsheimProTrial",
            fontWeight: 400,
            animationDelay: ".4s !important",
            color: "#333",
            textAlign: "center",
            visibility: "visible",
            animationName: "fadeInUp",
          }}
        >
          Company History
        </div>
        <div
          style={{
            fontSize: "1.4rem",
            fontFamily: "GTWalsheimProTrial",
            color: "#000000",
            outline: "none",
            boxSizing: "border-box",
            padding: 0,
            margin: 0,
            WebkitFontSmoothing: "antialiased",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",

            animationFillMode: "both",
            animationDuration: "1.76s",
            animationDelay: ".4s !important",
            visibility: "visible",
            animationName: "fadeInUp",
          }}
        >
          <div
            style={{
              fontSize: "1.4rem",
              fontFamily: "GTWalsheimProTrial",
              color: "#000000",
              visibility: "visible",
              outline: "none",
              boxSizing: "border-box",
              padding: 0,
              margin: 0,
              WebkitFontSmoothing: "antialiased",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              zoom: 1,
              overflow: "hidden",
              paddingTop: "60px",
              display: "flex",
            }}
          >
            <div
              style={isHovered1966 ? hoverItemStyle : item}
              onMouseEnter={handleMouseEnter1966}
              onMouseLeave={handleMouseLeave1966}
            >
              <div
                style={isHovered1966 ? yearHovered : year}
                onMouseEnter={handleMouseEnter1966}
                onMouseLeave={handleMouseLeave1966}
              >
                2015
              </div>
              <div
                style={isHovered1966 ? slideHover : slide}
                onMouseEnter={handleMouseEnter1966}
                onMouseLeave={handleMouseLeave1966}
              >
                <div style={time}>2015</div>
                <div style={dec}>
                  <p>
                    · Founded in Shanghai with strategic investment from XIAOMI
                    and Shunwei Capital.&nbsp;
                  </p>
                  <p>·&nbsp;Established R&amp;D center in Shanghai.</p>
                  <p>
                    ·&nbsp;Create a leading children's smart wearables brand in
                    China
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              style={isHovered2007 ? hoverItemStyle : item}
              onMouseEnter={handleMouseEnter2007}
              onMouseLeave={handleMouseLeave2007}
            >
              <div
                style={isHovered2007 ? yearHovered : year}
                onMouseEnter={handleMouseEnter2007}
                onMouseLeave={handleMouseLeave2007}
              >
                2016
              </div>
              <div
                style={isHovered2007 ? slideHover : slide}
                onMouseEnter={handleMouseEnter2007}
                onMouseLeave={handleMouseLeave2007}
              >
                <div style={time}>2016</div>
                <div style={dec}>
                  <p>
                    · Founded in Shanghai with strategic investment from XIAOMI
                    and Shunwei Capital.&nbsp;
                  </p>
                  <p>·&nbsp;Established R&amp;D center in Shanghai.</p>
                  <p>
                    ·&nbsp;Create a leading children's smart wearables brand in
                    China
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              style={isHovered2023 ? hoverItemStyle : item}
              onMouseEnter={handleMouseEnter2023}
              onMouseLeave={handleMouseLeave2023}
            >
              <div
                style={isHovered2023 ? yearHovered : year}
                onMouseEnter={handleMouseEnter2023}
                onMouseLeave={handleMouseLeave2023}
              >
                2017
              </div>
              <div
                style={isHovered2023 ? slideHover : slide}
                onMouseEnter={handleMouseEnter2023}
                onMouseLeave={handleMouseLeave2023}
              >
                <div style={time}>2017</div>
                <div style={dec}>
                  <p>
                    · Founded in Shanghai with strategic investment from XIAOMI
                    and Shunwei Capital.&nbsp;
                  </p>
                  <p>·&nbsp;Established R&amp;D center in Shanghai.</p>
                  <p>
                    ·&nbsp;Create a leading children's smart wearables brand in
                    China
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapcont;
