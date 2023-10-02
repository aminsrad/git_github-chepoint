import React, { useEffect, useState } from "react";

const GridCard = (el) => {
  const [dataUrl, setDataUrl] = useState("");
  const imgfolder = "http://localhost:5000/images/";
  useEffect(() => {
    // Convert the binary data to a base64 data URL
    const binaryData = new Uint8Array(el.image.data.data);
    console.log(el.image.data.data);
    console.log(binaryData);
    const base64Data = btoa(String.fromCharCode.apply(null, binaryData));
    //const dataUrl = `data:${el.image.contentType};base64,${base64Data}`;
    const decodedData = atob(base64Data);
    setDataUrl(decodedData);
  }, [el.image]);
  return (
    <div
      style={{
        width: "300px",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        margin: "40px",
        backgroundColor: "white",
      }}
    >
      <div style={{ border: "thin solid", borderColor: "#cabbff" }}>
        <img style={{ width: 100 }} src={imgfolder + dataUrl} alt="sacem" />
        <div>
          <p>{el.title}</p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
