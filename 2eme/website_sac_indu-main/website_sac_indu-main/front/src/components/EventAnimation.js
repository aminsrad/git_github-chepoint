import { yellow } from "@mui/material/colors";
import React, { useState } from "react";

const EventAnimation = () => {
  const [isHovered1966, setIsHovered1966] = useState(false);
  const [isHovered2007, setIsHovered2007] = useState(false);
  const [isHovered2022, setIsHovered2022] = useState(false);
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
  const handleMouseEnter2022 = () => {
    if (!isHovered2022) {
      setIsHovered2022(true);
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
  const handleMouseLeave2022 = () => {
    if (isHovered2022) {
      setIsHovered2022(false);
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
        paddingTop: "10px",
        paddingBottom: "10px",
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
            color: "#219ed9",
            textAlign: "center",
            visibility: "visible",
            animationName: "fadeInUp",
          }}
        >
          HISTOIRE DE SACEM
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
              paddingTop: "5px",
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
                1966
              </div>
              <div
                style={isHovered1966 ? slideHover : slide}
                onMouseEnter={handleMouseEnter1966}
                onMouseLeave={handleMouseLeave1966}
              >
                <div style={time}>1966</div>
                <div style={dec}>
                  <p>
                    · Fandation de sacem industries est lancement de l'usine a
                    manzel bourguiba
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
                2007
              </div>
              <div
                style={isHovered2007 ? slideHover : slide}
                onMouseEnter={handleMouseEnter2007}
                onMouseLeave={handleMouseLeave2007}
              >
                <div style={time}>2007</div>
                <div style={dec}>
                  <p>contenue...s</p>
                </div>
              </div>
            </div>

            <div
              style={isHovered2022 ? hoverItemStyle : item}
              onMouseEnter={handleMouseEnter2022}
              onMouseLeave={handleMouseLeave2022}
            >
              <div
                style={isHovered2022 ? yearHovered : year}
                onMouseEnter={handleMouseEnter2022}
                onMouseLeave={handleMouseLeave2022}
              >
                2022
              </div>
              <div
                style={isHovered2022 ? slideHover : slide}
                onMouseEnter={handleMouseEnter2022}
                onMouseLeave={handleMouseLeave2022}
              >
                <div style={time}>2022</div>
                <div style={dec}>
                  <p>
                    Sacem Industries صـــاســام للصنــاعات The Medium power
                    transformer 26 MVA by Sacem Industries صـــاســام للصنــاعات
                    is ready, export operation to #guinea Thanks to Sacem
                    Industries صـــاســام للصنــاعات 's team for this new
                    #successstory
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
                2023
              </div>
              <div
                style={isHovered2023 ? slideHover : slide}
                onMouseEnter={handleMouseEnter2023}
                onMouseLeave={handleMouseLeave2023}
              >
                <div style={time}>2023</div>
                <div style={dec}>
                  <p>
                    SACEM GROUP مجمع صـــاســام يسعدنا الإعلان عن نجاح محولات
                    التوزيع الكهربائية من فئة 1500kVA & 300kVA في اختبار تحمل
                    الدائرة القصيرة وفقًا للمواصفة IEC60076-5 في مختبرات
                    VEIKI-VNL في المجر. هاته المحولات صممت وصنعت في تونس وفقا
                    لمعايير اللجنة الكهروتقنية الدولية IEC والمواصفات الفنية
                    للشركة العامة للكهرباء بليبيا. تتوجه الإدارة العامة لمجمع
                    صاسام بالشكر الجزيل إلى جميع الزملاء والزميلات المشاركين في
                    هذا النجاح.
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

export default EventAnimation;
