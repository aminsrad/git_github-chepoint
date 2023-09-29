import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { deleteActualites } from "../redux/actions/actualites";
import { useDispatch } from "react-redux";
import EditModalActu from "./EditModalActu";
import { Button, ModalFooter } from "reactstrap";

const UpdateActualiteCard = (el) => {
  console.log(el._id);
  const dispatch = useDispatch();
  const deleteactu = () => {
    dispatch(deleteActualites(el._id));
  };

  const [dataUrl, setDataUrl] = useState("");
  const imgfolder = "http://localhost:5000/images/";

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
    <div>
      <div style={{ marginTop: 30, marginLeft: 60 }} sx={{ maxWidth: 345 }}>
        <Card>
          <Box>
            <CardContent>
              <Typography component="div" variant="h5">
                <p>{el.title}</p>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            height="140"
            style={{ maxWidth: 345 }}
            alt="sacem"
            src={imgfolder + dataUrl}
          />
          <CardMedia />
          <ModalFooter>
            <Button color="secondary" onClick={deleteactu}>
              delete
            </Button>

            <EditModalActu el={el} />
          </ModalFooter>
        </Card>
      </div>
    </div>
  );
};

export default UpdateActualiteCard;
