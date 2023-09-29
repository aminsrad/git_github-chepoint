import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactus } from "../redux/actions/contactus";
import AdminNav from "./AdminNav";
import ContactusCard from "./ContactusCard";
import SideBar from "./SideBar";

const ContactUsDisplay = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactus());
    /* eslint-disable-next-line */
  }, []);
  const contactus = useSelector((state) => state.contactus_s.contactus_s);
  console.log(contactus);
  return (
    <div>
      <AdminNav />
      <h1>List des demandes de contacts</h1>
      <div style={{ display: "flex" }}>
        <SideBar style={{ width: "10%", borderStyle: "solid" }} />
        <div style={{ width: "90%" }}>
          <div class="card-deck">
            {contactus && contactus.map((el) => <ContactusCard {...el} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDisplay;
