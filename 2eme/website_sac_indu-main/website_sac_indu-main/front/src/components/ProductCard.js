import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductCard = (el) => {
  const imgfolder = "http://localhost:5000/images/";
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    // Convert the binary data to a base64 data URL
    const binaryData = new Uint8Array(el.image.data.data);
    console.log(binaryData);
    const base64Data = btoa(String.fromCharCode.apply(null, binaryData));
    //const dataUrl = `data:${el.image.contentType};base64,${base64Data}`;
    const decodedData = atob(base64Data);
    setDataUrl(decodedData);
  }, [el.image]);
  return (
    // <Grid item xs={6}>
    // <Item style={{ marginTop: "15px" }}>
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
    // </Item>

    //</Grid>
  );
};
export default ProductCard;
