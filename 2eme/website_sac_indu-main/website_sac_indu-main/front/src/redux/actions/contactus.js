import { CREATE_CONTACTUS, GET_CONTACTUS } from "./types";
import axios from "axios";

//fetch Data
export const getContactus = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/contactus/")
    .then((res) => dispatch({ type: GET_CONTACTUS, payload: res.data }))
    .catch((err) => console.log(err));
};

//add new Actualites
export const addContactus = (newContactus) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/contactus/", newContactus)
    .then((res) => dispatch({ type: CREATE_CONTACTUS, payload: res.data }))
    .catch((err) => console.log(err));
};
