import React, { useEffect } from "react";
import GridCard from "./GridCard";
import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getActualites } from "../redux/actions/actualites";

const GridList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActualites());
    /* eslint-disable-next-line */
  }, []);
  const actualits = useSelector((state) => state.actualites.actualites);
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          paddingLeft: "444px",
          paddingRight: "444px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          {actualits && actualits.map((el) => <GridCard {...el} />)}
        </div>
      </div>
    </div>
  );
};

export default GridList;
