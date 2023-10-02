import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/user";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";

const AddUser = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const clearForm = () => {
    setusername("");
    setpassword("");
  };
  const add = (e) => {
    e.preventDefault();
    const added_user = { username, password };

    dispatch(addUser(added_user));
    console.log(added_user);
    clearForm();
    alert("user added");
  };

  return (
    <div>
      <AdminNav />
      <h1>Ajouter utilisateur</h1>

      <div style={{ display: "flex" }}>
        <SideBar style={{ width: "10%", borderStyle: "solid" }} />
        <div style={{ width: "90%" }}>
          <form>
            <div class="form-group">
              <label for="validationCustom01">Username</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Username"
                onChange={(e) => setusername(e.target.value)}
                value={username}
                required
              />
            </div>
            <div class="form-group">
              <label for="validationCustom01">Password</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <button type="button" onClick={add} class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
