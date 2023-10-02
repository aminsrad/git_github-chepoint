import React, { useEffect } from "react";
import AdminNav from "./AdminNav";
import { useSelector, useDispatch } from "react-redux";
import { getActualites } from "../redux/actions/actualites";
import UpdateActualiteCard from "./UpdateActualiteCard";
import SideBar from "./SideBar";

const Updateactualite = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActualites());
    /* eslint-disable-next-line */
  }, []);
  const actualits = useSelector((state) => state.actualites.actualites);

  return (
    <div>
      <AdminNav />
      <h1>Update actualite</h1>

      <div style={{ display: "flex" }}>
        <SideBar style={{ width: "10%", borderStyle: "solid" }} />

        <div style={{ width: "90%" }}>
          <div class="card-deck">
            {actualits &&
              actualits.map((el) => <UpdateActualiteCard {...el} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateactualite;
