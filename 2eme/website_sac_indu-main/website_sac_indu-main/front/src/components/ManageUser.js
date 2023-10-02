import React, { useEffect } from "react";
import AdminNav from "./AdminNav";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/user";
import UsersCard from "./UsersCard";
import SideBar from "./SideBar";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>;

const ManageUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    /* eslint-disable-next-line */
  }, []);
  const users = useSelector((state) => state.users.users);
  return (
    <div>
      <AdminNav />
      <h1>User list</h1>

      <div style={{ display: "flex" }}>
        <SideBar style={{ width: "10%", borderStyle: "solid" }} />
        <div style={{ width: "90%" }}>
          <div class="card-deck">
            {users && users.map((el) => <UsersCard {...el} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
