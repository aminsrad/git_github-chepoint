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

const ProductCardcopy = (el) => {
  const imgfolder = "http://localhost:5000/images/";
  const [dataUrl, setDataUrl] = useState("");

  // useEffect(() => {
  //   // Convert the binary data to a base64 data URL
  //   const binaryData = new Uint8Array(el.image.data.data);
  //   console.log(binaryData);
  //   const base64Data = btoa(String.fromCharCode.apply(null, binaryData));
  //   //const dataUrl = `data:${el.image.contentType};base64,${base64Data}`;
  //   const decodedData = atob(base64Data);
  //   setDataUrl(decodedData);
  // }, [el.image]);
  return (
    <Grid item xs={6}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="sacem"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
};
export default ProductCardcopy;
