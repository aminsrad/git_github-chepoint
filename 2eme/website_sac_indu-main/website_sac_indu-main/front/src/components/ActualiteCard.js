import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { CardActionArea } from "@mui/material";

const ActualiteCard = (el) => {
  console.log(el);
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
    // <div>
    //   <div style={{ marginTop: 30, marginLeft: 60 }} sx={{ maxWidth: 345 }}>
    //     <Card>
    //       <Box>
    //         <CardContent>
    //           <Typography component="div" variant="h5">
    //             <p>{el.title}</p>
    //           </Typography>
    //           <Typography
    //             variant="subtitle1"
    //             color="text.secondary"
    //             component="div"
    //           ></Typography>
    //         </CardContent>
    //       </Box>
    //       <CardMedia
    //         component="img"
    //         height="140"
    //         style={{ maxWidth: 345 }}
    //         alt="sacem"
    //         src={imgfolder + dataUrl}
    //       />
    //       <CardMedia />
    //     </Card>
    //   </div>
    // </div>
    <Card
      style={{
        width: "320px",
        height: "300px",
        marginTop: "15px",
      }}
    >
      <CardActionArea
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          style={{
            height: "auto",
            maxHeight: "70%",
            width: "100%",
          }}
          src={imgfolder + dataUrl}
          alt="sacem"
        />
        <CardContent
          style={{
            height: "auto",
            maxHeight: "30%",
            width: "auto",
            maxWidth: "320px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {el.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {el.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ActualiteCard;
