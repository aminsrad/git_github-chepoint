import axios from "axios";
import { CREATE_USER, GET_USER } from "./types";

//fetch Data
export const getUsers = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/users")
    .then((res) => dispatch({ type: GET_USER, payload: res.data }))
    .catch((err) => console.log(err));
};
//add new User
export const addUser = (newUser) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/register", newUser)
    .then((res) => dispatch({ type: CREATE_USER, payload: res.data }))
    .catch((err) => console.log(err));
};
///update user password

export const updateUser = (iduser, updateduser) => (dispatch) => {
  axios
    .put(`http://localhost:5000/api/users/${iduser}`, updateduser)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};
//delete user
export const deleteUser = (iduser) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/users/${iduser}`)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};
