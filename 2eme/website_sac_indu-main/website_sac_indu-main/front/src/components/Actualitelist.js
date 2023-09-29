import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getActualites } from "../redux/actions/actualites";
import ActualiteCard from "./ActualiteCard";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import ImagesCarousel from "./ImagesCarousel";
import NavbarLatest from "./NavbarLatest";
import Footercomp from "./Footercomp";

const Actualitelist = () => {
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActualites());
    /* eslint-disable-next-line */
  }, []);
  const actualits = useSelector((state) => state.actualites.actualites);
  return (
    <div style={{ paddingTop: "120px" }}>
      <NavbarLatest />
      <div>
        <ol style={listStyles}>
          <li style={{ display: "inline" }}>
            <a href="/">Accueil</a>
          </li>
          <li style={textStyles}> / Liste actualité</li>
        </ol>
      </div>
      <div style={{ width: "100%", marginTop: "40px", marginBottom: "20px" }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 5, sm: 5, md: 5 }}
            style={{ paddingLeft: "40px", justifyContent: "space-between" }}
          >
            {actualits && actualits.map((el) => <ActualiteCard {...el} />)}
          </Grid>
        </Box>
      </div>
      <Footercomp />
      <Footer />
    </div>
  );
};

export default Actualitelist;
