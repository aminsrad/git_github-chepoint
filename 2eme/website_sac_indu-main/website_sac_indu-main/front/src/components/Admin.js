import React from "react";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";

const Admin = () => {
  return (
    <div>
      <AdminNav />
      <SideBar style={{ width: "10%", borderStyle: "solid" }} />
    </div>
  );
};

export default Admin;
