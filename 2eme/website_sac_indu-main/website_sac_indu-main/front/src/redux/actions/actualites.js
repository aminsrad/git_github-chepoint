import { GET_ACTUALITE, CREATE_ACTUALITE } from "./types";
import axios from "axios";

//fetch Data
export const getActualites = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/actualites")
    .then((res) => dispatch({ type: GET_ACTUALITE, payload: res.data }))
    .catch((err) => console.log(err));
};
//add new Actualites
export const addActualites = (newActualite) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/actualites", newActualite)
    .then((res) => dispatch({ type: CREATE_ACTUALITE, payload: res.data }))
    .catch((err) => console.log(err));
};
//delete actualité
export const deleteActualites = (idactualite) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/actualites/${idactualite}`)
    .then((res) => dispatch(getActualites()))
    .catch((err) => console.log(err));
};
///update actualite
export const updateActualites =
  (idactualite, updatedactualite) => (dispatch) => {
    axios
      .put(
        `http://localhost:5000/api/actualites/${idactualite}`,
        updatedactualite
      )
      .then((res) => dispatch(getActualites()))
      .catch((err) => console.log(err));
  };
